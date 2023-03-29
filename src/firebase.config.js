// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAHAfneoski-2J6GLbuny8biaRdCUsif4",
  authDomain: "email-otp-vysion.firebaseapp.com",
  projectId: "email-otp-vysion",
  storageBucket: "email-otp-vysion.appspot.com",
  messagingSenderId: "837836113215",
  appId: "1:837836113215:web:88f66829ff0a71baa57f8a",
  measurementId: "G-Z0563TTPQV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);