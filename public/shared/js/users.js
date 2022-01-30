import { onGetUsers, addUser, deleteUser, getUser, updateUser, } from "./firebase.js";


/*Declaraciones */
const userForm = document.getElementById("user-form");
const usersTable = document.getElementById("users-table");
const name = document.getElementById("name");
const lastName = document.getElementById("lastName");
const typeId= document.getElementById('type-id')
const identification = document.getElementById("identification");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const address = document.getElementById("address");
const rh = document.getElementById("rh");
const gender = document.getElementById("gender");
const rol = document.getElementById("rol")
const btnAddUser = document.getElementById("btn-add-user");


let editStatus = false;
let id = "";


window.addEventListener("DOMContentLoaded", async (e) => {


    onGetUsers((querySnapshot) => {
        usersTable.innerHTML = "";

        querySnapshot.forEach((doc) => {

            const data = doc.data();

            usersTable.innerHTML += `
      <tr>
      <td scope="row" class="text-center">${data.nombre}</td>
      <td scope="row" class="text-center">${data.apellido}</td>
      <td scope="row" class="text-center">${data.rol}</td>
      <td scope="row" class="text-center">${data.identificacion}</td>
      <td scope="row" class="text-center">${data.telefono}</td>
      <td scope="row"><button class="btn btn-warning update-user" data-id=${doc.id} data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="getbootstrap">Editar</button></td>
      <td scope="row"><button class="btn btn-danger delete-user" data-id=${doc.id}>Eliminar</button></td>
      </tr> 
      `
        });

        const btnDeleteTable = document.querySelectorAll('.delete-user');
        const btnUpdateTable = document.querySelectorAll('.update-user');
    
        btnDeleteTable.forEach((btn) =>
            btn.addEventListener("click", async ({ target: { dataset } }) => {
                try {
                    await deleteUser(dataset.id);
                } catch (error) {
                    console.log(error);
                }
            })
        );


        btnUpdateTable.forEach((btn) => {
            btn.addEventListener("click", async (e) => {
                try {
                    const doc = await getUser(e.target.dataset.id);
                    const user = doc.data();
                    userForm['name'].value = user.nombre;
                    userForm['lastName'].value = user.apellido;
                    userForm['type-id'].value = user.tipo_id
                    userForm['identification'].value = user.identificacion;
                    userForm['phone'].value = user.telefono;
                    userForm['email'].value = user.correo;
                    userForm['address'].value = user.direccion;
                    userForm['rh'].value = user.rh;
                    userForm['gender'].value = user.genero;
                    userForm['rol'].value = user.rol;

                    editStatus = true;
                    id = doc.id;
                    btnAddUser.innerText = "Update";
                } catch (error) {
                    console.log(error);
                }
            });
        });
    });
});

btnAddUser.addEventListener("click", async (e) => {
    e.preventDefault();

    try {
        if (!editStatus) {
            await addUser(name.value, lastName.value, typeId.value, identification.value, phone.value, email.value, address.value, rh.value, gender.value, rol.value, false);
        } else {
            await updateUser(id, {
                nombre: name.value,
                apellido: lastName.value,
                tipo_id: typeId.value,
                identificacion: identification.value,
                telefono: phone.value,
                correo: email.value,
                direccion: address.value,
                rh: rh.value,
                genero: gender.value,
                rol:rol.value
            });

            editStatus = false;
            id = "";
            btnAddUser.innerText = "Save";
        }

        userForm.reset();
        name.focus();
    } catch (error) {
        console.log(error);
    }
});
