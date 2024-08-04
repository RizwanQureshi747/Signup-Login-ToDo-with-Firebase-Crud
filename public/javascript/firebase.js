// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getFirestore, collection, addDoc, doc, setDoc, getDocs, getDoc, deleteDoc, updateDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDPieR9wG7pYv8pDt9XPTL15O8w62r0dGk",
    authDomain: "signup-login-6a418.firebaseapp.com",
    projectId: "signup-login-6a418",
    storageBucket: "signup-login-6a418.appspot.com",
    messagingSenderId: "824136739108",
    appId: "1:824136739108:web:3a65baafe50a1aff1babb1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
// Initialize Auth
const auth = getAuth();

export { db, collection, addDoc, auth, createUserWithEmailAndPassword, doc, setDoc, deleteDoc, signInWithEmailAndPassword, onSnapshot, signOut, getDocs, getDoc, updateDoc }