// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import store from "../redux/store";
import { loginFulfilled } from "../redux/auth/actions";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Mantain token updated
export const tokenListener = () => {
  firebase.auth().onIdTokenChanged(async (user) => {
    if (user) {
      const token = await user.getIdToken();
      localStorage.setItem("token", token);
      store.dispatch(loginFulfilled(token));
    } else {
      localStorage.removeItem("token");
    }
  });
};

export default firebaseApp;
