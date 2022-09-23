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
import { Form } from "../../Hooks/useForm";

// Firebase Imports
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../Services/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const userInitialValues = {
  fullName: "",
  // gender: { isMale: "", isFemale: "" },
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = ({ onToggleAnimation, onSetMemberAuth }) => {
  console.log("In Regfister", onToggleAnimation);
  const [userCredentials, setUserCredentials] = useState(userInitialValues);
  const [error, setError] = useState("");
  const [genderValue, setGenderValue] = useState("male");

  useEffect(
    (event) => {
      console.log("Inside effect", genderValue);
      // setGenderValue("male");
    },
    [genderValue]
  );

  // Destructuring the values
  const { fullName, email, password, confirmPassword } = userCredentials;

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

    setGenderValue(value);
  };

  console.log("Gender:", genderValue);

  // console.log("keys:", Object.keys(userCredentials.gender));

  // To check the user is valid nor not
  const validateUserCredentials = () => {
    alert("In check");
    console.log("In valiodatrion");
    let checkPwdIsValid = true;

    if (password !== "" && confirmPassword !== "") {
      if (password !== confirmPassword) {
        checkPwdIsValid = false;
        setError("Password didn't matched.");
      }
    }
    return checkPwdIsValid;
  };
  console.log("Error:", error);

  const handleResetRegisterForm = () => {
    console.log("In reset form");
    setUserCredentials(userInitialValues);
    setGenderValue("male");
  };

  console.log("Original Values:", userCredentials);

  // Registering the User.
  const registerUser = async () => {
    if (validateUserCredentials()) {
      console.log("In IF");
      // Create a new user with email and password using firebase
      try {
        let response = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        handleResetRegisterForm();
        const uid = response.user.uid;
        const collectionRef = collection(db, "users");
        const payload = {
          uid,
          fullName,
          // gender: userCredentials.gender,
          genderValue,
          email,
        };

        const userDetails = await addDoc(collectionRef, payload);
        console.log("UserDetails:", userDetails);
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
                name="fullName"
                value={fullName}
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
                  defaultValue={genderValue}
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    checked={genderValue === "male"}
                    value="male"
                    control={<Radio />}
                    label="Male"
                    name="gender"
                    onChange={handleGender}
                    // checked={userCredentials.gender.isMale == "male"}
                  />
                  <FormControlLabel
                    checked={genderValue === "female"}
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
                name="email"
                value={email}
                onChange={handleUserOnChange}
              />
            </Grid>

            <Grid item xs={8}>
              <InputControl
                label="Your Password"
                type="password"
                name="password"
                value={password}
                onChange={handleUserOnChange}
              />
            </Grid>

            <Grid item xs={8}>
              <InputControl
                label="Your Confirm Password"
                type="password"
                name="confirmPassword"
                value={confirmPassword}
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
