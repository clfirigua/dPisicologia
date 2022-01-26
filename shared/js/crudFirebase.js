import {firebaseConfig, app, analytics, auth, signInWithEmailAndPassword,createUserWithEmailAndPassword,db,collection, addDoc,doc, setDoc} from "./firebase.js";


const addUser = (name, lastName,identification,phone,email,password,address,rh,genderOption) =>{
  console.log(name, lastName,identification,phone,email,password,address,rh,genderOption)
   createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(name, lastName,identification,phone,email,password,address,rh,genderOption)
    createUser(name, lastName,identification,phone,email,password,address,rh,genderOption)
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}
const createUser = async (name, lastName,identification,phone,email,password,address,rh,genderOption) =>{
  console.log(name, lastName,identification,phone,email,password,address,rh,genderOption)
   try{ 
        const docRef = await addDoc(collection(db, "Usuarios"), {
            nombre: name,
            apellido:lastName,
            identificacion:identification,
            telefono:phone,
            correo:email,
            contraseña:password,
            direccion:address,
            rh:rh,
            genero:genderOption
        });
        console.log("Usuario creado satisfactoriamente");
        return true
      } catch (e) {
        console.error("Error adding document: ", e);
    }
    
}
const updateUser = () =>{

}
const deleteUSer = () =>{

}

const validarUser = (user,password) =>{
    // TODO:Validar si el usuario existe, si retornar un objeto con el nombre y ID y El IDRol
    let respuesta;
    signInWithEmailAndPassword(auth, user ,password).then((userCredential)=>{
        const user = userCredential.user;
        console.log(user);
        respuesta = true;
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        respuesta = false;
      });
      return respuesta;
}


export {addUser,validarUser}