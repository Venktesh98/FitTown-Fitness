import { Grid } from "@mui/material";
import React, { useState } from "react";
import { Form } from "../../Hooks/useForm";
import { auth } from "../../Services/firebase";
import ButtonControl from "../../UI/Button/ButtonControl";
import GridContainerControl from "../../UI/Grid/GridContainerControl";
import InputControl from "../../UI/InputBox/InputControl";
import styles from "./Login.module.css";

// firebase imports
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

const loginInitialValues = {
  loginEmail: "",
  loginPassword: "",
};

const Login = ({
  onhandleMemberRegistration,
  onhandleResetPassword,
  onSetMemberAuth,
}) => {
  const [loginCredential, setLoginCredential] = useState(loginInitialValues);
  const { loginEmail: email, loginPassword: password } = loginCredential;

  // Reset Login Form

  const handleResetForm = () => {
    setLoginCredential({ ...loginInitialValues });
  };

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
    handleResetForm();
  };

  const handleLoginUserOnChange = (event) => {
    const { name, value } = event.target;

    setLoginCredential({
      ...loginCredential,
      [name]: value,
    });
  };

  const signInWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    console.log("googleProvider:", googleProvider);
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        console.log(res.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  console.log("loginInitialValues:", loginInitialValues);

  return (
    <section className={styles["login-container"]}>
      <div id={styles.slider} className={styles["slide-in-content"]}>
        <Form onSubmit={handleLoginOperation}>
          <GridContainerControl>
            <Grid item xs={12} lg={8}>
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
