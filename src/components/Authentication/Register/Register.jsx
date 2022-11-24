import React, { useContext, useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import styles from "./Register.module.css";
import ButtonControl from "../../UI/Button/ButtonControl";
import GridContainerControl from "../../UI/Grid/GridContainerControl";
import InputControl from "../../UI/InputBox/InputControl";
import { Form } from "../../../Hooks/useForm";
import useAuth from "../../../Hooks/useAuth";

import DialogContext from "../../../contexts/DialogContext";
// Firebase Imports
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../Services/firebase";
import { updateProfile } from "firebase/auth";
import { useToast } from "../../../Hooks/useToast";

const Register = ({ onToggleAnimation, onSetMemberAuth }) => {
  const {
    userInitialValues,
    userCredentials,
    setUserCredentials,
    userRegistrationResponse,
    settingUpUserInitial,
    setErrors,
    errors,
    currentUser,
  } = useAuth();

  const { setOpen, setResetPassword } = useContext(DialogContext);

  const [gender, setGender] = useState("male");

  const toastResponse = useToast();

  // For handling validations
  let validations = { ...errors };

  // variables for Toast Messages
  let type = undefined;
  let message = undefined;

  useEffect(() => {
    // setGender("male");
  }, [gender]);

  // Destructuring the values
  const { userFullName, userEmail, userPassword, userConfirmPassword } =
    userCredentials;

  // Used for checking the password and confirm password on form submit
  const validatePasswordOnSubmit = () => {
    let checkPwdIsValid = true;

    if (userPassword !== "" && userConfirmPassword !== "") {
      if (userPassword !== userConfirmPassword) {
        checkPwdIsValid = false;
        validations.userConfirmPassword = "Password didn't matched";
      }
      setErrors({ ...validations });

      console.log("Validations:", validations);
    }
    return checkPwdIsValid;
  };

  // To check user credentails on typing
  const validateUserCredentials = (validateUserFields) => {
    const evaluateUserFields = { ...validateUserFields };

    if ("userFullName" in evaluateUserFields) {
      validations.userFullName =
        evaluateUserFields.userFullName.length >= 3
          ? ""
          : "Please enter atleast 3 characters";
    }
    if ("userEmail" in evaluateUserFields) {
      validations.userEmail = /^\S+@\S+\.\S+$/.test(
        evaluateUserFields.userEmail
      )
        ? ""
        : "Email is not valid";
    }
    if ("userPassword" in evaluateUserFields) {
      validations.userPassword =
        evaluateUserFields.userPassword.length <= 6
          ? "Password should be of 6 characters"
          : "";
    }

    // For setting up the errors messages
    setErrors({
      ...validations,
    });

    const evaluatedFieldsResult = Object.values(validations).every(
      (fieldValueItem) => fieldValueItem === ""
    );

    return evaluatedFieldsResult;
  };

  const handleUserOnChange = (event) => {
    const { name, value } = event.target;

    setUserCredentials({
      ...userCredentials,
      [name]: value,
    });

    // Validating the user
    validateUserCredentials({ [name]: value });

    // 1st way using previous values
    // setUserCredentials((prevUserCredentials) => ({
    //   ...prevUserCredentials,
    //   [name]: value,
    // }));
  };

  const handleGender = (event) => {
    const { value } = event.target;

    setGender(value);
  };

  const handleResetRegisterForm = () => {
    setUserCredentials(userInitialValues);
    setGender("male");
    setOpen(false);
    setErrors({});
  };

  // Registering the User.
  const registerUser = async () => {
    if (validateUserCredentials() || validatePasswordOnSubmit()) {
      if (validatePasswordOnSubmit()) {
        // If user again tries to register in case already registered
        if (currentUser) {
          toastResponse(
            (type = "info"),
            (message = "Already Registered,Please Logout")
          );
          return;
        }

        // Create a new user with email and password using firebase
        try {
          let response = await userRegistrationResponse();

          // Setting up the diplayName of the user
          await updateProfile(auth.currentUser, {
            displayName: userFullName,
          });

          const uid = response.user.uid;
          console.log("Register response:", response);

          settingUpUserInitial(response.user.displayName);
          // creating a collection named as "users" in FireStore DB
          const collectionRef = collection(db, "users");
          const payload = {
            uid,
            fullName: userFullName,
            // gender: userCredentials.gender,
            gender,
            email: userEmail,
          };

          // Saving the user details into the Firestore DB
          const userDetails = await addDoc(collectionRef, payload); // used for adding data into Firestore Database
          console.log("userDetails:", userDetails);
          toastResponse(
            (type = "success"),
            (message = "Registered Successfully")
          );

          handleResetRegisterForm(); // resets the form.
          // setOpen(false);
        } catch (error) {
          console.log("Error:", error);
          if (error.code === "auth/email-already-in-use") {
            validations.userEmail = "Email already Exists!";
          }
          setErrors({ ...validations });
        }
      }
    }
  };

  const handleUserOperations = (event) => {
    event.preventDefault();
    // setError("");
    registerUser();
    // setOpen(false);
  };

  const handleRedirect = (event) => {
    event.preventDefault();
    onSetMemberAuth(false);
    setResetPassword(false);
  };

  const isButtonEnabled =
    userFullName.length > 0 &&
    userEmail.length > 0 &&
    userPassword.length > 0 &&
    userConfirmPassword.length > 0 &&
    gender.length > 0;

  return (
    <section className={styles["registration-container"]}>
      <div
        className={onToggleAnimation ? styles["slide-in-content"] : undefined}
        id={styles.slider}
      >
        <Form onSubmit={handleUserOperations}>
          <GridContainerControl>
            <Grid item xs={8}>
              <InputControl
                label="Your Full Name"
                type="text"
                name="userFullName"
                value={userFullName}
                onChange={handleUserOnChange}
                error={errors.userFullName}
              />
            </Grid>

            <Grid item xs={8}>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                  Gender
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue={gender}
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    checked={gender === "male"}
                    value="male"
                    control={<Radio />}
                    label="Male"
                    name="gender"
                    onChange={handleGender}
                    // checked={userCredentials.gender.isMale == "male"}
                  />
                  <FormControlLabel
                    checked={gender === "female"}
                    value="female"
                    control={<Radio />}
                    label="Female"
                    name="gender"
                    onChange={handleGender}
                  />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={8}>
              <InputControl
                label="Your Email"
                type="email"
                name="userEmail"
                value={userEmail}
                onChange={handleUserOnChange}
                error={errors.userEmail}
              />
            </Grid>

            <Grid item xs={8}>
              <InputControl
                label="Your Password"
                type="password"
                name="userPassword"
                value={userPassword}
                onChange={handleUserOnChange}
                error={errors.userPassword}
              />
            </Grid>

            <Grid item xs={8}>
              <InputControl
                label="Your Confirm Password"
                type="password"
                name="userConfirmPassword"
                value={userConfirmPassword}
                onChange={handleUserOnChange}
                error={errors.userConfirmPassword}
              />
            </Grid>

            <Grid item xs={8}>
              <ButtonControl text="Register" disabled={!isButtonEnabled} />
              <p className={styles["register-redirect"]}>
                Already have an account
                <span className={styles.login}>
                  <a href="" onClick={handleRedirect}>
                    Login
                  </a>
                </span>
              </p>
            </Grid>
          </GridContainerControl>
        </Form>
      </div>
    </section>
  );
};

export default Register;
