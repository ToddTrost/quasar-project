import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { initializeApp } from "firebase/app";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdSxuD0XLtr7wJ0AJotQYSFWQ4XnciLNo",
  authDomain: "quasartodolist-5c23a.firebaseapp.com",
  projectId: "quasartodolist-5c23a",
  storageBucket: "quasartodolist-5c23a.appspot.com",
  messagingSenderId: "362756292070",
  appId: "1:362756292070:web:e46cce84cfea710e976a27"
};

const app = initializeApp(firebaseConfig);
// Initialize Firebase
const db = firebase.initializeApp(firebaseConfig);
export default db.firestore();
