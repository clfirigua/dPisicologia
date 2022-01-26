// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-app.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-analytics.js";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-auth.js"

import { getFirestore,collection, addDoc,doc, setDoc } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyDYOvPYlfQvXi3i3ACsBE5iRJH0LxoMBqI",

  authDomain: "psicologico-fd2fc.firebaseapp.com",

  projectId: "psicologico-fd2fc",

  storageBucket: "psicologico-fd2fc.appspot.com",

  messagingSenderId: "247106661610",

  appId: "1:247106661610:web:c173618eefe6c6684f7b93",

  measurementId: "G-FLXC106BZD"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const auth = getAuth();

const db = getFirestore();

export {db, collection, addDoc,doc, setDoc }
export{auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged}
export{firebaseConfig, app, analytics}