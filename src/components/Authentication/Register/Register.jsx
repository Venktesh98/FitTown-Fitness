import React, { useEffect, useState } from "react";
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

// Firebase Imports
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../Services/firebase";

const Register = ({ onToggleAnimation, onSetMemberAuth }) => {
  const {
    userInitialValues,
    userCredentials,
    setUserCredentials,
    userRegistrationResponse,
  } = useAuth();
  const [error, setError] = useState("");
  const [gender, setGender] = useState("male");

  useEffect(() => {
    // setGender("male");
  }, [gender]);

  // Destructuring the values
  const { userFullName, userEmail, userPassword, userConfirmPassword } =
    userCredentials;

  const handleUserOnChange = (event) => {
    const { name, value } = event.target;

    // console.log("Vlaue:", value);

    // 1st way using previous values
    // setUserCredentials((prevUserCredentials) => ({
    //   ...prevUserCredentials,
    //   [name]: value,
    // }));

    // if (Object.keys(userCredentials.gender).includes(event.target.name)) {
    //   console.log("In if");
    //   setUserCredentials({
    //     ...userCredentials,
    //     gender: {
    //       ...userCredentials.gender,
    //       [event.target.name]: event.target.value,
    //     },
    //   });
    // } else {
    //   console.log("In else");
    //   setUserCredentials({
    //     ...userCredentials,
    //     [event.target.name]: event.target.value,
    //   });
    // }

    setUserCredentials({
      ...userCredentials,
      [name]: value,
    });
  };

  const handleGender = (event) => {
    const { value } = event.target;

    setGender(value);
  };

  // console.log("Gender:", gender);

  // console.log("keys:", Object.keys(userCredentials.gender));

  // To check the user is valid nor not
  const validateUserCredentials = () => {
    alert("In check");

    let checkPwdIsValid = true;

    if (userPassword !== "" && userConfirmPassword !== "") {
      if (userPassword !== userConfirmPassword) {
        checkPwdIsValid = false;
        setError("Password didn't matched.");
      }
    }
    return checkPwdIsValid;
  };

  const handleResetRegisterForm = () => {
    setUserCredentials(userInitialValues);
    setGender("male");
  };

  // Registering the User.
  const registerUser = async () => {
    if (validateUserCredentials()) {
      // Create a new user with email and password using firebase
      try {
        let response = await userRegistrationResponse();

        const uid = response.user.uid;
        const collectionRef = collection(db, "users");
        const payload = {
          uid,
          fullName: userFullName,
          // gender: userCredentials.gender,
          gender,
          email: userEmail,
        };

        const userDetails = await addDoc(collectionRef, payload);

        handleResetRegisterForm(); // resets the form
      } catch (error) {
        console.log("Error:", error);
      }
    }
  };

  const handleUserOperations = (event) => {
    event.preventDefault();
    setError("");
    registerUser();
  };

  const handleRedirect = (event) => {
    event.preventDefault();
    onSetMemberAuth(false);
  };

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
              />
            </Grid>

            <Grid item xs={8}>
              <InputControl
                label="Your Password"
                type="password"
                name="userPassword"
                value={userPassword}
                onChange={handleUserOnChange}
              />
            </Grid>

            <Grid item xs={8}>
              <InputControl
                label="Your Confirm Password"
                type="password"
                name="userConfirmPassword"
                value={userConfirmPassword}
                onChange={handleUserOnChange}
              />
            </Grid>

            <Grid item xs={8}>
              <ButtonControl text="Register" />
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
