
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";

import { getAuth ,signOut ,createUserWithEmailAndPassword ,updateProfile,signInWithEmailAndPassword,onAuthStateChanged,sendEmailVerification, updateEmail, updatePassword, deleteUser, signInWithPopup, GoogleAuthProvider, } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

import { getFirestore, collection, addDoc, onSnapshot,query,where, } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";





const firebaseConfig = {
    apiKey: "AIzaSyCguZp5QRMNx_fmWXtv3OJnAfvHLhq2sRY",
  authDomain: "fir-auth-32938.firebaseapp.com",
  projectId: "fir-auth-32938",
  storageBucket: "fir-auth-32938.firebasestorage.app",
  messagingSenderId: "3479745378",
  appId: "1:3479745378:web:4f1225ebed8c9596eb323b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore(app)

export {db,collection, addDoc, getAuth,signOut ,createUserWithEmailAndPassword,updateProfile, signInWithEmailAndPassword,onAuthStateChanged ,sendEmailVerification, updateEmail, updatePassword, deleteUser, signInWithPopup, GoogleAuthProvider, auth, onSnapshot,query,where, }
