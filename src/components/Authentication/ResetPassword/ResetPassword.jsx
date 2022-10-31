import { Grid } from "@mui/material";
import { sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { Form } from "../../../Hooks/useForm";
import { auth } from "../../Services/firebase";
import ButtonControl from "../../UI/Button/ButtonControl";
import GridContainerControl from "../../UI/Grid/GridContainerControl";
import InputControl from "../../UI/InputBox/InputControl";
import Login from "../Login/Login";
import styles from "./ResetPassword.module.css";

const ResetPassword = ({ onMemberAuth, onToggleAnimation }) => {
  const [email, setEmail] = useState("");

  const handleResetPasswordOnChange = (event) => {
    const { value } = event.target;

    setEmail(value);
  };

  const handleResetPassword = (event) => {
    event.preventDefault();

    sendPasswordResetEmail(auth, email)
      .then((response) => {
        console.log("Response:", response);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  const handleRedirect = (event) => {
    event.preventDefault();

    onMemberAuth(true);
  };

  return (
    <section>
      <div
        className={onToggleAnimation && styles["slide-in-content"]}
        id={styles.slider}
      >
        <Form onSubmit={handleResetPassword}>
          <GridContainerControl>
            <Grid item xs={12}>
              <InputControl
                label="Enter Email to Reset"
                type="text"
                name="resetPassword"
                onChange={handleResetPasswordOnChange}
              />
            </Grid>

            <Grid item xs={12}>
              <ButtonControl text="Reset Password" />
              <p>
                Don't have an account?
                <span className={styles.register}>
                  <a href="" onClick={handleRedirect}>
                    Register
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

export default ResetPassword;
