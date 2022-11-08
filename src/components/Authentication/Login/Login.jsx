import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Form } from "../../../Hooks/useForm";
import ButtonControl from "../../UI/Button/ButtonControl";
import GridContainerControl from "../../UI/Grid/GridContainerControl";
import InputControl from "../../UI/InputBox/InputControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import styles from "./Login.module.css";

import useAuth from "../../../Hooks/useAuth";
import { useContext } from "react";
import DialogContext from "../../../contexts/DialogContext";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useToast } from "../../../Hooks/useToast";
import {
  auth,
  browserSessionPersistence,
  browserLocalPersistence,
  setPersistence,
} from "../../Services/firebase";

const inlineStyles = {
  checkbox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

const Login = ({ onhandleMemberRegistration, onhandleResetPassword }) => {
  const {
    signInWithGoogle,
    loggingUser,
    handleResetLoginForm,
    setLoginCredential,
    loginCredential,
    currentUser,
  } = useAuth();

  const toastResponse = useToast();

  const { loginEmail, loginPassword } = loginCredential;
  const { setOpen } = useContext(DialogContext);

  // variables for Toast Messages
  let type = undefined;
  let message = undefined;

  const [userSession, setUserSession] = useState(false);

  // Determining the user Sesion i.e based on the Remember me
  // funtionality by default will be in Session logs out in case
  // tab or window is closed else If user clicks on the Remember m e
  // will persists until user explicitly logs out
  useEffect(() => {
    (async () => {
      userSession
        ? await setPersistence(auth, browserLocalPersistence)
        : await setPersistence(auth, browserSessionPersistence);
    })();
  }, [userSession]);

  const handleLoginOperation = async (event) => {
    event.preventDefault();

    // Already User Logged in and if tries again.
    if (currentUser) {
      console.log("Alredy LoggedIn");
      toastResponse((type = "info"), (message = "You're Already LoggedIn!"));
    }
    // Logging for the first time
    else {
      const loginResponse = await loggingUser();
      if (loginResponse) {
        toastResponse((type = "success"), (message = "Login Successfully!"));
      } else {
        toastResponse(
          (type = "error"),
          (message = "Something went wrong, Please Login again")
        );
      }
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

  const handleRememberMe = async (event) => {
    console.log("In remeberr me:", event.target.checked);

    const isCheckboxChecked = event.target.checked;
    setUserSession(isCheckboxChecked);
  };

  console.log("userSession:", userSession);

  // For disabiling the buttons until all fields are filled
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

              <div>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Remember Me"
                    sx={{ ...inlineStyles.checkbox }}
                    onClick={handleRememberMe}
                  />
                </FormGroup>
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
