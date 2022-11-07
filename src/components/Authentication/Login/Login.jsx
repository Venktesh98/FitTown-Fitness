import { Grid } from "@mui/material";
import React, { useState } from "react";
import { Form } from "../../../Hooks/useForm";
import ButtonControl from "../../UI/Button/ButtonControl";
import GridContainerControl from "../../UI/Grid/GridContainerControl";
import InputControl from "../../UI/InputBox/InputControl";
import styles from "./Login.module.css";

import useAuth from "../../../Hooks/useAuth";
import { useContext } from "react";
import DialogContext from "../../../contexts/DialogContext";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useToast } from "../../../Hooks/useToast";

const Login = ({ onhandleMemberRegistration, onhandleResetPassword }) => {
  const {
    signInWithGoogle,
    loggingUser,
    handleResetLoginForm,
    setLoginCredential,
    loginCredential,
  } = useAuth();

  const toastResponse = useToast();

  const { loginEmail, loginPassword } = loginCredential;
  const { setOpen } = useContext(DialogContext);

  // variables for Toast Messages
  let type = undefined;
  let message = undefined;

  const handleLoginOperation = async (event) => {
    event.preventDefault();
    const loginResponse = await loggingUser();
    if (loginResponse) {
      toastResponse((type = "success"), (message = "LoggedIn Successfully!"));
    } else {
      toastResponse(
        (type = "error"),
        (message = "Something went wrong, Please Login again")
      );
    }
    setOpen(false);
    handleResetLoginForm();
  };

  const handleLoginUserOnChange = (event) => {
    const { name, value } = event.target;

    setLoginCredential({
      ...loginCredential,
      [name]: value,
    });
  };

  const isButtonEnabled = loginEmail.length > 0 && loginPassword.length > 0;

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

            <Grid item xs={8} lg={8}>
              <ButtonControl text="Login" disabled={!isButtonEnabled} />
            </Grid>

            <Grid item xs={8} lg={8}>
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
          <ToastContainer />
        </Form>
      </div>
    </section>
  );
};

export default Login;
