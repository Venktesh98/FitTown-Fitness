import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzgg2SnuVj0TeAzCX7VXliYcAFUHJM7FU",
  authDomain: "fittown-fitness-360613.firebaseapp.com",
  projectId: "fittown-fitness-360613",
  storageBucket: "fittown-fitness-360613.appspot.com",
  messagingSenderId: "506910103853",
  appId: "1:506910103853:web:8d07b14916a5e23b4b1ba4",
  measurementId: "G-7NZQTN41S4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
