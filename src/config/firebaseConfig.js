// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdwNb9qE6bVgrx0GpIG39AkvVo9Ihz6KU",
  authDomain: "project-manager-c336f.firebaseapp.com",
  projectId: "project-manager-c336f",
  storageBucket: "project-manager-c336f.appspot.com",
  messagingSenderId: "715513096265",
  appId: "1:715513096265:web:4ff0f91efbecac06cef798",
  measurementId: "G-YXN764HS8M",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

export default firebaseConfig;
