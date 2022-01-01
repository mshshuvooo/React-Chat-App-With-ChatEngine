import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDSRJMWY7n5W_DhdHipc88tUe3rEg8owC8",
  authDomain: "unichat-messenger-d9f24.firebaseapp.com",
  projectId: "unichat-messenger-d9f24",
  storageBucket: "unichat-messenger-d9f24.appspot.com",
  messagingSenderId: "784233003516",
  appId: "1:784233003516:web:67d64c31815a3e7be01a79"
};
const app = initializeApp(firebaseConfig);
export const auth  = getAuth(app);