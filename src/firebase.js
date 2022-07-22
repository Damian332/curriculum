// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// cloud storage
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBpoT2WoHlNpBTVqr59Pdl3TGvxotyL0Yg",
  authDomain: "my-awes-17241.firebaseapp.com",
  projectId: "my-awes-17241",
  storageBucket: "my-awes-17241.appspot.com",
  messagingSenderId: "867180174950",
  appId: "1:867180174950:web:8bd74adaef2ed13976d7a7",
  measurementId: "G-8X4KPL3T4H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth();

export const storage = getStorage(app);

// console.log(app)