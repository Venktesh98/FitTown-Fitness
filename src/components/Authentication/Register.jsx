import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { db, auth } from "../Services/firebase";
import { collection, addDoc } from "firebase/firestore";

const userInitialValues = {
  fullName: "",
  gender: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
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
    // loggingUser();

    // const collectionRef = collection(db, "users");
    // const payload = { name: "vgs", gender: "male" };
    // let addedData = await addDoc(collectionRef, payload);
    // console.log("addedData:", addedData);
  };

  return (
    <div>
      <form onSubmit={handleUserOperations}>
        <label htmlFor="">Full Name</label>
        <input
          type="text"
          name="fullName"
          onChange={handleUserOnChange}
          // value={fullName}
        />

        <label htmlFor="">Gender</label>

        <label htmlFor="">Male</label>
        <input
          type="radio"
          id="male"
          name="gender"
          onChange={handleUserOnChange}
          value="Male"
        />

        <label htmlFor="female">Female</label>
        <input
          type="radio"
          id="female"
          name="gender"
          onChange={handleUserOnChange}
          value="Female"
        />

        <label htmlFor="">Email</label>
        <input
          type="email"
          name="email"
          onChange={handleUserOnChange}
          // value={email}
        />

        <label htmlFor="">Password</label>
        <input
          type="password"
          name="password"
          onChange={handleUserOnChange}
          // value={password}
        />

        <label htmlFor="">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          onChange={handleUserOnChange}
          // value={confirmPassword}
        />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Register;
