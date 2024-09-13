// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCblnlAn0wlc2wCl0MIepjuiG65nqUHIRo",
  authDomain: "netflixx-gpt-7b8f2.firebaseapp.com",
  projectId: "netflixx-gpt-7b8f2",
  storageBucket: "netflixx-gpt-7b8f2.appspot.com",
  messagingSenderId: "695417899036",
  appId: "1:695417899036:web:706178c73218a6abaf77d9",
  measurementId: "G-XVQJRLNGNT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();