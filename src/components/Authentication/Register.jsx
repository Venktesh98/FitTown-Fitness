import React, { useEffect, useState } from "react";
import InputControl from "../UI/InputBox/InputControl";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import styles from "./Register.module.css";
import ButtonControl from "../UI/Button/ButtonControl";
import { Form } from "../Hooks/useForm";

// Firebase Imports
import { db, auth } from "../Services/firebase";
import { collection, addDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import GridContainerControl from "../UI/Grid/GridContainerControl";

const userInitialValues = {
  fullName: "",
  gender: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = ({ onToggleAnimation }) => {
  console.log("In Regfister", onToggleAnimation);
  const [userCredentials, setUserCredentials] = useState(userInitialValues);
  const [error, setError] = useState("");

  // Destructuring the values
  const { fullName, email, password, confirmPassword } = userCredentials;

  const handleUserOnChange = (event) => {
    const { name, value } = event.target;

    // 1st way using previous values
    // setUserCredentials((prevUserCredentials) => ({
    //   ...prevUserCredentials,
    //   [name]: value,
    // }));

    setUserCredentials({
      ...userCredentials,
      [name]: value,
    });
  };

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
  console.log("onchamge:", userCredentials);

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

        const uid = response.user.uid;
        const collectionRef = collection(db, "users");
        const payload = {
          uid,
          fullName,
          gender: userCredentials.gender,
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

  return (
    <section className={styles["registration-container"]}>
      <div
        className={
          onToggleAnimation === true ? styles["slide-in-content"] : undefined
        }
        id={styles.slider}
      >
        <Form onSubmit={handleUserOperations}>
          <GridContainerControl>
            <Grid item xs={8}>
              <InputControl
                label="Your Full Name"
                type="text"
                name="fullName"
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
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                    name="gender"
                    onChange={handleUserOnChange}
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                    name="gender"
                    onChange={handleUserOnChange}
                  />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={8}>
              <InputControl
                label="Your Email"
                type="email"
                name="email"
                onChange={handleUserOnChange}
              />
            </Grid>

            <Grid item xs={8}>
              <InputControl
                label="Your Password"
                type="password"
                name="password"
                onChange={handleUserOnChange}
              />
            </Grid>

            <Grid item xs={8}>
              <InputControl
                label="Your Confirm Password"
                type="password"
                name="confirmPassword"
                onChange={handleUserOnChange}
              />
            </Grid>

            <Grid item xs={8}>
              <ButtonControl text="Register" />
            </Grid>
          </GridContainerControl>
        </Form>
      </div>
    </section>
  );
};

export default Register;
