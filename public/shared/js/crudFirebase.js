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