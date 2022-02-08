import { addDocument, onGetDocuments, deleteDocuments, getDocument, updateDocument } from "./crudFirebase.js";




/*Declaraciones */

const rolName = document.getElementById("nameRol");
const rolUser = document.getElementById("checkUsers");
const rolForms = document.getElementById("checkForms");
const rolAssignations = document.getElementById("checkAssignations");
const rolReports = document.getElementById("checkReports");
const rolBackups = document.getElementById("checkBackups");
const rolPanel = document.getElementById("checkPanel");
const rolAnswer = document.getElementById("checkanswers");
const rolBtnSave = document.getElementById("saveRoles");
const rolTarjetas = document.getElementById("tarjetas-roles");
const rolForm = document.getElementById("rol-form");
let statusEdit = false
let id = ''
let collection = "Roles"

window.addEventListener('DOMContentLoaded', async (e) => {
    
    onGetDocuments(collection,(querySnapshot) => {
        //mostrar datos
        rolTarjetas.innerHTML = ""
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            rolTarjetas.innerHTML += `
                <div class=" row tarjeta-sombra">
                    <div class="col-8 text-center fw-bold">
                        <p>${data.rol}</p>
                    </div>
                    <div class="col-2">
                        <button class="btn btn-warning update-rol"data-id=${doc.id}><i class="fas fa-edit update-rol"data-id=${doc.id} aria-hidden="true"></i></button>
                    </div>
                    <div class="col-2">
                        <button class="btn btn-danger delete-rol" data-id=${doc.id}><i class="fas fa-trash-alt delete-rol" data-id=${doc.id} aria-hidden="true"></i></button>
                    </div>
                </div>`
        });



        const btnDeleteRol = document.querySelectorAll('.delete-rol');
        const btnUpdateRol = document.querySelectorAll('.update-rol');

        //eliminar datos

        btnDeleteRol.forEach((btn) =>
            btn.addEventListener("click", async ({ target: { dataset } }) => {
                try {
                    await deleteDocuments(collection, dataset.id);
                }
                catch (error) {
                    console.log(error);
                }
            })
        );

        //actualizar datos    
        btnUpdateRol.forEach((btn) => {
            btn.addEventListener("click", async (e) => {
                try {
                    const doc = await getDocument(collection, e.target.dataset.id)
                    const rol = doc.data();
                    rolForm['nameRol'].value = rol.rol;
                    rolForm['checkUsers'].checked = rol.usuarios;
                    rolForm['checkForms'].checked = rol.formularios;
                    rolForm['checkAssignations'].checked = rol.asignaciones;
                    rolForm['checkReports'].checked = rol.informes;
                    rolForm['checkBackups'].checked = rol.respaldos;
                    rolForm['checkPanel'].checked = rol.panel;
                    rolForm['checkanswers'].checked = rol.responder;

                    statusEdit = true;
                    id = doc.id;
                    rolBtnSave.innerHTML = "Actualizar";

                }
                catch (error) {
                    console.log(error)
                }
            });
        });
    });
});

rolBtnSave.addEventListener("click", async (e) => {
    e.preventDefault();
    try{
        if(!statusEdit){
            await addDocument(collection,{
                rol:rolName.value,
                usuarios:rolUser.checked,
                formularios:rolForms.checked,
                asignaciones:rolAssignations.checked,
                informes:rolReports.checked,
                respaldos:rolBackups.checked,
                panel:rolPanel.checked,
                responder:rolAnswer.checked,
            });
        }else{
            await updateDocument(collection,id, {
                rol:rolName.value,
                usuarios:rolUser.checked,
                formularios:rolForms.checked,
                asignaciones:rolAssignations.checked,
                informes:rolReports.checked,
                respaldos:rolBackups.checked,
                panel:rolPanel.checked,
                responder:rolAnswer.checked,
            });
            statusEdit = false;
            id="";
            rolBtnSave.innerHTML="Guardar"
        }
        rolForm.reset();
        rolName.focus();
    }
    catch(error){
        console.log(error)
    }
});