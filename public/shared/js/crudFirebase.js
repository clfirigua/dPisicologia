import { firebaseConfig, app, analytics, auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, db, collection, getDoc, addDoc, doc, setDoc, onSnapshot, deleteDoc,updateDoc } from "./firebase.js";


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

const viewUser = async (userTable,userForm) => {

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
    <td scope="row"><button class="btn btn-warning update-user" data-id=${doc.id} data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="getbootstrap">Editar</button></td>
    <td scope="row"><button class="btn btn-danger delete-user" data-id=${doc.id}>Eliminar</button></td>
    </tr> 
    `
    });

    userTable.innerHTML = html;
    const btnDeleteTable = userTable.querySelectorAll('.delete-user');
    const btnUpdateTable = userTable.querySelectorAll('.update-user');

    deleteUser(btnDeleteTable);
    updateUser(btnUpdateTable,userForm);

  })
}

const updateUser = (btnUpdate,userForm) => {  
  
  btnUpdate.forEach((btn) => {
    btn.addEventListener('click',async (e)  => {     
      const ref = doc(db, 'Usuarios', e.target.dataset.id)
      const document = await getDoc(ref);
      const user = document.data();
      userForm['name'].value = user.nombre;
      userForm['lastName'].value = user.apellido;
      userForm['identification'].value = user.identificacion;
      userForm['phone'].value = user.telefono;
      userForm['email'].value = user.correo;
      userForm['address'].value = user.direccion;
      userForm['rh'].value = user.rh;
      userForm['gender'].value = user.genero;

      await updateDoc(ref,{
        nombre: userForm['name'].value,
        apellido: userForm['lastName'].value,
        identificacion: userForm['identification'].value,
        telefono: userForm['phone'].value,
        correo: userForm['email'].value,
        direccion: userForm['address'].value,
        rh: userForm['rh'].value,
        genero: userForm['gender'].value
      });
    
    })
  })

}

const deleteUser = (btnDelete) => {

  btnDelete.forEach(btn => {
    btn.addEventListener('click', ({ target: { dataset } }) => {
      deleteDoc(doc(db, 'Usuarios', dataset.id));
    })
  })

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


export { addUser, validarUser, viewUser, deleteUser, updateUser }