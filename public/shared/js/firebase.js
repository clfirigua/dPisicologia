// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-app.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-analytics.js";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-auth.js"

import { getFirestore, collection, getDocs, onSnapshot, addDoc, deleteDoc, doc, getDoc,updateDoc,} from "https://www.gstatic.com/firebasejs/9.6.4/firebase-firestore.js";

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

/*
 * Save a New Task in Firestore
 * @param {string} name the name of the user
 * @param {string} lastName the lastname of the user
 * @param {string} identification the identification of the user
 * @param {string} phone the phone of the user 
 * @param {string} email the email of the user
 * @param {string} address the address of the user
 * @param {string} rh the rh of the user
 * @param {string} gender the gender of the user
 * @param {string} rol the rol of the user
 */
export const addUser = (name, lastName, identificacion,phone, email, address, rh, gender, rol ) =>
  addDoc(collection(db, "Usuarios"), { nombre:name, apellido:lastName, identificacion:identificacion,telefono:phone, correo:email, direccion:address, rh:rh, genero:gender, rol });

export const onGetUsers = (callback) =>
  onSnapshot(collection(db, "Usuarios"), callback);

/**
 *
 * @param {string} id Task ID
 */
export const deleteUser = (id) => deleteDoc(doc(db, "Usuarios", id));

export const getUser = (id) => getDoc(doc(db, "Usuarios", id));

export const updateUser = (id, newFields) =>
  updateDoc(doc(db, "Usuarios", id), newFields);

