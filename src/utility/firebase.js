import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDH9M_hqXUWNLU-wQRtTDMdBkHcUceKgNw",
  authDomain: "clone-ef27b.firebaseapp.com",
  projectId: "clone-ef27b",
  storageBucket: "clone-ef27b.firebasestorage.app",
  messagingSenderId: "47189925202",
  appId: "1:47189925202:web:f9594d634b2f8b77adee8b",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
