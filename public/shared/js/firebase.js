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

//funciones  de usuarios "./users.js"

/*añadir usuarios */
export const addUser = (name, lastName,typeId, identification,phone, email, address, rh, gender, rol, state) =>
  addDoc(collection(db, "Usuarios"), { nombre:name, apellido:lastName,tipo_id:typeId, identificacion:identification,telefono:phone, correo:email, direccion:address, rh:rh, genero:gender, rol:rol, estado:state });

/*mostrar en tiempo real usuarios */
export const onGetUsers = (callback) => onSnapshot(collection(db, "Usuarios"), callback);

/*borrar usuarios */
export const deleteUser = (id) => deleteDoc(doc(db, "Usuarios", id));

/*obtener informacion del usuario */
export const getUser = (id) => getDoc(doc(db, "Usuarios", id));

/*actualizar usuario */
export const updateUser = (id, newFields) => updateDoc(doc(db, "Usuarios", id), newFields);

//fin funciones usuarios

