import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../Services/firebase";

const loginInitialValues = {
  loginEmail: "",
  loginPassword: "",
};

const Login = () => {
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
    <div>
      <form onSubmit={handleLoginOperation}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="loginEmail"
          onChange={handleLoginUserOnChange}
          // value={fullName}
        />

        <label htmlFor="">Password</label>
        <input
          type="text"
          name="loginPassword"
          onChange={handleLoginUserOnChange}
          // value={fullName}
        />

        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
