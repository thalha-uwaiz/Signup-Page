// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnGN5V1CYhwPLyxWxZLyBkWYHedD4PJe0",
  authDomain: "task-1-athentication.firebaseapp.com",
  projectId: "task-1-athentication",
  storageBucket: "task-1-athentication.appspot.com",
  messagingSenderId: "217788497323",
  appId: "1:217788497323:web:71d09931bf1e2fca61e6ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

