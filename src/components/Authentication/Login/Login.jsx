import { Grid } from "@mui/material";
import React, { useState } from "react";
import { Form } from "../../../Hooks/useForm";
import { auth } from "../../Services/firebase";
import ButtonControl from "../../UI/Button/ButtonControl";
import GridContainerControl from "../../UI/Grid/GridContainerControl";
import InputControl from "../../UI/InputBox/InputControl";
import styles from "./Login.module.css";

import useAuth from "../../../Hooks/useAuth";

const Login = ({ onhandleMemberRegistration, onhandleResetPassword }) => {
  const {
    signInWithGoogle,
    loggingUser,
    handleResetLoginForm,
    setLoginCredential,
    loginCredential,
  } = useAuth();

  const handleLoginOperation = (event) => {
    event.preventDefault();
    loggingUser();
    handleResetLoginForm();
  };

  const handleLoginUserOnChange = (event) => {
    const { name, value } = event.target;

    setLoginCredential({
      ...loginCredential,
      [name]: value,
    });
  };

  return (
    <section className={styles["login-container"]}>
      <div id={styles.slider} className={styles["slide-in-content"]}>
        <Form onSubmit={handleLoginOperation}>
          <GridContainerControl>
            <Grid item xs={8} lg={8}>
              <InputControl
                label="Your Email"
                type="email"
                name="loginEmail"
                value={loginCredential.loginEmail}
                onChange={handleLoginUserOnChange}
              />
            </Grid>

            <Grid item xs={8} lg={8}>
              <InputControl
                label="Your Password"
                type="password"
                name="loginPassword"
                value={loginCredential.loginPassword}
                onChange={handleLoginUserOnChange}
              />
            </Grid>

            <Grid item xs={8}>
              <ButtonControl text="Login" />

              <div className={styles["sign-in-with-google"]}>
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/signin-with-google.png"
                  }
                  alt="No Image"
                  onClick={signInWithGoogle}
                />
              </div>

              <div className={styles["auth-links"]}>
                <p className={styles["forget-password"]}>
                  <a href="" onClick={onhandleResetPassword}>
                    Forgot Password
                  </a>
                </p>

                <p className={styles["register-member"]}>
                  <a href="">Not a member yet?</a>
                  <span onClick={onhandleMemberRegistration}> Register</span>
                </p>
              </div>
            </Grid>
          </GridContainerControl>
        </Form>
      </div>
    </section>
  );
};

export default Login;
