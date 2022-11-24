import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// firebase imports
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../components/Services/firebase";

const userInitialValues = {
  userFullName: "",
  // gender: { isMale: "", isFemale: "" },
  userEmail: "",
  userPassword: "",
  userConfirmPassword: "",
};

const loginInitialValues = {
  loginEmail: "",
  loginPassword: "",
};

export const useFirebaseOperations = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [avatarInitial, setAvatarInitial] = useState("");
  const [errors, setErrors] = useState({});

  // Registration
  const [userCredentials, setUserCredentials] = useState(userInitialValues);
  const { userEmail, userPassword } = userCredentials;

  // Login
  const [loginCredential, setLoginCredential] = useState(loginInitialValues);
  const { loginEmail: email, loginPassword: password } = loginCredential;

  const { state } = useLocation();
  const navigate = useNavigate();

  // Listening the user on page refresh i.e to persists user value
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authenticatedUser) => {
      console.log("In Auth State..");
      setCurrentUser(authenticatedUser);
      settingUpUserInitial(authenticatedUser?.displayName);
      setIsLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // For Displaying user initial on context menu
  const settingUpUserInitial = (userDisplayName) => {
    const getUserInitial = userDisplayName?.split("");
    if (getUserInitial !== undefined) {
      setAvatarInitial(getUserInitial[0]);
    }
  };

  // Google Signin
  const signInWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();

    signInWithPopup(auth, googleProvider)
      .then((res) => {
        console.log(res.user);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // Logging the User with Email and Password
  const loggingUser = async () => {
    console.log("In Login");
    // try {
    let response = await signInWithEmailAndPassword(auth, email, password);
    console.log("Login Response:", response);

    if (response) {
      navigate(state ? state?.path : "/");
      setIsLoading(false);
      return response;
    }
    // } catch (error) {
    // console.log("Login Error:", error.message);
    // console.log("Global Login Error:", error);
    // }
  };

  // Reset Login Form
  const handleResetLoginForm = () => {
    setLoginCredential(loginInitialValues);
  };

  // Response of User Registration
  const userRegistrationResponse = async () => {
    console.log("In user Register");
    let response = await createUserWithEmailAndPassword(
      auth,
      userEmail,
      userPassword
    );
    setIsLoading(false);
    return response;
  };

  // Logout
  const logOut = async () => {
    try {
      await signOut(auth);
      setIsLoading(false);
    } catch (error) {
      console.log("Logout Error:", error);
    }
  };

  return {
    isLoading,
    currentUser,
    signInWithGoogle,
    loggingUser,
    handleResetLoginForm,
    setLoginCredential,
    loginCredential,
    logOut,
    userInitialValues,
    setUserCredentials,
    userCredentials,
    userRegistrationResponse,
    avatarInitial,
    setAvatarInitial,
    settingUpUserInitial,
    setErrors,
    errors,
  };
};
