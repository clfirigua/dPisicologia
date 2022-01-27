import { addUser, validarUser, viewUser,deleteUser, updateUser } from "./crudFirebase.js";


/*Declaraciones */
const usersTable = document.getElementById("users-table");
// const btnDelete = document.querySelectorAll(".delete-user");
// const btnUpdate = document.querySelectorAll(".update-user");
const name = document.getElementById("name");
const lastName = document.getElementById("lastName");
const identification = document.getElementById("identification");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const address = document.getElementById("address");
const rh = document.getElementById("rh");
const gender = document.getElementById("gender");
const btn = document.getElementById("btn-add-user");
const password = "123456";


btn.addEventListener("click", (e) => {
    addUser(name.value, lastName.value, identification.value, phone.value, email.value, password, address.value, rh.value, gender.value)
    document.querySelector("form").reset();

})

viewUser(usersTable)

    