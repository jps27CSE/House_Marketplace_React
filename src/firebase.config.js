// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqbUCUCsfupXoxQOtuyQGvVBohcBiHt_I",
  authDomain: "house-market-place-react.firebaseapp.com",
  projectId: "house-market-place-react",
  storageBucket: "house-market-place-react.appspot.com",
  messagingSenderId: "450970064060",
  appId: "1:450970064060:web:e75d22f2a46df625cf2cb9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
