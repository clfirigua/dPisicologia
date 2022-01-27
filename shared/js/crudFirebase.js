import { firebaseConfig, app, analytics, auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, db, collection, getDocs, addDoc, doc, setDoc, onSnapshot } from "./firebase.js";


const addUser = (name, lastName, identification, phone, email, password, address, rh, genderOption) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      createUser(name, lastName, identification, phone, email, password, address, rh, genderOption)

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode)
      // ..
    });
}
const createUser = async (name, lastName, identification, phone, email, password, address, rh, genderOption) => {
  try {
    const docRef = await addDoc(collection(db, "Usuarios"), {
      nombre: name,
      apellido: lastName,
      identificacion: identification,
      telefono: phone,
      correo: email,
      contraseña: password,
      direccion: address,
      rh: rh,
      genero: genderOption
    });
    alert("Usuario creado satisfactoriamente");
    return true
  } catch (e) {
    alert("Se a generado un erro al guardar el usuario, por favor intente mas tarde o contacte con el administrador", e);
  }

}

const viewUser = async (userTable) => {
  onSnapshot(collection(db, "Usuarios"), (querySnapshot) => {
    let html = ''
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots


      // console.log(document.querySelector(userTable))
      const data = doc.data();

      html += `
    <tr>
    <td scope="row" class="text-center">${data.nombre}</td>
    <td scope="row" class="text-center">${data.apellido}</td>
    <td scope="row" class="text-center">${data.correo}</td>
    <td scope="row" class="text-center">${data.identificacion}</td>
    <td scope="row" class="text-center">${data.telefono}</td>
    <td scope="row"><button class="btn btn-warning " data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="getbootstrap">Editar</button></td>
    <td scope="row"><button class="btn btn-danger ">Eliminar</button></td>
    </tr> 
    `
    });

    userTable.innerHTML = html
  })
}

const updateUser = () => {

}
const deleteUSer = () => {

}

const validarUser = (user, password) => {
  // TODO:Validar si el usuario existe, si retornar un objeto con el nombre y ID y El IDRol
  let respuesta;
  signInWithEmailAndPassword(auth, user, password).then((userCredential) => {
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


export { addUser, validarUser, viewUser }