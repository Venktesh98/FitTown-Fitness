import { Grid } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Form } from "../Hooks/useForm";
import { auth } from "../Services/firebase";
import ButtonControl from "../UI/Button/ButtonControl";
import GridContainerControl from "../UI/Grid/GridContainerControl";
import InputControl from "../UI/InputBox/InputControl";
import styles from "./Login.module.css";

const loginInitialValues = {
  loginEmail: "",
  loginPassword: "",
};

const Login = ({ onhandleMemberRegistration }) => {
  const [loginCredential, setLoginCredential] = useState(loginInitialValues);
  const { loginEmail: email, loginPassword: password } = loginCredential;

  // Logging the User
  const loggingUser = async () => {
    try {
      let response = await signInWithEmailAndPassword(auth, email, password);
      console.log("Login Respinse:", response);
    } catch (error) {
      console.log("Login Error:", error);
    }
  };

  const handleLoginOperation = (event) => {
    event.preventDefault();
    console.log("In submit");
    loggingUser();
  };

  const handleLoginUserOnChange = (event) => {
    const { name, value } = event.target;

    setLoginCredential({
      ...loginCredential,
      [name]: value,
    });
  };

  console.log("loginInitialValues:", loginInitialValues);

  return (
    <section className={styles["login-container"]}>
      <div id={styles.slider} className={styles["slide-in-content"]}>
        <Form onSubmit={handleLoginOperation}>
          <GridContainerControl>
            <Grid item xs={8}>
              <InputControl
                label="Your Email"
                type="email"
                name="loginEmail"
                onChange={handleLoginUserOnChange}
              />
            </Grid>

            <Grid item xs={8}>
              <InputControl
                label="Your Password"
                type="password"
                name="loginPassword"
                onChange={handleLoginUserOnChange}
              />
            </Grid>

            <Grid item xs={8}>
              <ButtonControl text="Login" />
              <p>
                <a href="">Not a member yet?</a>
                <span onClick={onhandleMemberRegistration}> Register</span>
              </p>
            </Grid>
          </GridContainerControl>
        </Form>
      </div>
    </section>
  );
};

export default Login;
