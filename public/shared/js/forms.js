
import { addDocument, onGetDocuments, deleteDocuments, getDocument, oneDoc } from "./crudFirebase.js";
const addForm = document.getElementById("add-form");
const nameForm = document.getElementById("name-form");
const tableForm = document.getElementById("forms-table");
let collection = "Formularios"


addForm.addEventListener("click", async (e) => {
    const document = await oneDoc(collection, nameForm.value, {

    })
    localStorage.setItem("idAddForm", nameForm.value)
    localStorage.setItem("estado", "creando");
    location.href = "./formulario.html"
})

window.addEventListener('DOMContentLoaded', async (e) => {
    onGetDocuments(collection, (querySnapshot) => {
        tableForm.innerHTML = ""
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            tableForm.innerHTML += `
            <tr>
                <td scope="row" class="text-center">${doc.id}</td>
                <td scope="row" class="text-center">${data.descripcion}</td>
                <td scope="row"><button class="btn btn-warning update-form" data-id=${doc.id}>Editar</button></td>
                <td scope="row"><button class="btn btn-danger delete-form" data-id=${doc.id}>Eliminar</button></td>
            </tr>
            `
        })

        const btnDeleteForm = document.querySelectorAll('.delete-form');
        const btnUpdateForm = document.querySelectorAll('.update-form');


        btnDeleteForm.forEach((btn) => {
            btn.addEventListener("click", async ({ target: { dataset } }) => {
                try {
                    await deleteDocuments(collection, dataset.id);
                }
                catch (error) {
                    console.log(error);
                }
            })
        })
        btnUpdateForm.forEach((btn) => {
            btn.addEventListener("click", async (e) => {
                try {
                    const doc = await getDocument(collection, e.target.dataset.id)
                    const form = doc.data();
                    localStorage.setItem('idUpdateForm', doc.id);
                    localStorage.setItem("estado", "editando");
                    location.href = "./formulario.html"
                } catch (error) {
                    console.log(error)
                }
            })
        })
    })
})