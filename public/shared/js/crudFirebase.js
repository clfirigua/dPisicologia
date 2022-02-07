import {db, collection, addDoc, onSnapshot,deleteDoc,getDoc,updateDoc,doc,setDoc } from "./firebase.js";


//añadir documento en firebase
const addDocument = (nameCollection,data)=> addDoc(collection(db,nameCollection),data);
//obtener documentos en firebase
const onGetDocuments = (nameCollection,callback) => onSnapshot(collection(db,nameCollection),callback);
// borrar documentos en firebase
const deleteDocuments = (nameCollection,id) => deleteDoc(doc(db,nameCollection,id));
//obtener informacion de un documento en firebase
const getDocument = (nameCollection,id) => getDoc(doc(db,nameCollection,id));
//actualizar datos de firebase
const updateDocument = (nameCollection,id,changes)=> updateDoc(doc(db,nameCollection,id),changes);
//añadir documento con id personalizado
const oneDoc = (nameCollection,nameForm,data) => setDoc(doc(db,nameCollection,nameForm),data);

export { addDocument,onGetDocuments,deleteDocuments,getDocument,updateDocument ,oneDoc};