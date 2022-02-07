import { addDocument, onGetDocuments, deleteDocuments, getDocument, updateDocument } from "./crudFirebase.js";

const pregunta = document.getElementById("pregunta");
const tipoRespuesta = document.getElementById("tiporespuesta");
const preguntaDepende = document.getElementById("preguntadepende");
const preguntaDependiente = document.getElementById("preguntadependiente");
const respuestaDepende = document.getElementById("respuestadepende");
const form = document.getElementById("form");
const tarjetasForm = document.getElementById("tarjetas-form")
const respuestas = document.getElementById("respuestas");

let collection = "Formularios";



tipoRespuesta.addEventListener("change", (e) => {
    let tipo = e.target.value
    
    respuestas.innerHTML+=`<button class="btn btn-success" id="agregarRespuesta" onclick="nose()"> agregar respuesta </button>`
    
    
    // agregarRespuesta.addEventListener("click", (e)=> {
    //     e.preventDefault();
    //     console.log("hola");
    // })

    switch (tipo) {
        case "Respuesta corta":
            respuestas.innerHTML += `
            <div class="mb-3">
                <input type="text" name="respuesta-corta" id="respuesta-corta" class="inp-bottom-line"
                placeholder="Respuesta corta">
                <butt
            </div> `;
            break;
        case "Respuesta larga":
            respuestas.innerHTML +=`
            <div class="mb-3">
                <textarea name="" id="" rows="5" placeholder="Respuesta larga"></textarea>
            </div>`;
            break;
        case "Opcion multiple":
            respuestas.innerHTML+=`
            <div class="mb-3">
            <label for="opcionmultiple" class="col-form-label">Opcion multiple</label>
                <div class="form-check">
                <i class="far fa-check-square">
                        <input type="text" class="inp-bottom-line" placeholder="opcion multiple">
                        </i>
                </div>
            </div>`
            break;
        case "Opcion unica":
            respuestas.innerHTML += `
            <div class="mb-3">
            <label for="opcion-unica" class="col-form-label">Opcion unica</label>
                <div class="form-check">
                    <input class="form-check-input" type="radio" disabled name="flexRadioDisabled" id="flexRadioDisabled">
                    <input type="text" class="inp-bottom-line" placeholder="opcion unica">
                    </label>
                </div>
            </div>`
            break;
        default:
            respuestas.innerHTML+=`
                <p>Selecciona un tipo de respuesta</p>
            `
            break;
    }
})



window.addEventListener("DOMContentLoaded", async (e) => {

    if (localStorage.getItem("estado") == "creando") {
        try {
            let id = localStorage.getItem("idAddForm")
            const doc = await getDocument(collection, id)
            const preguntas = doc.data();
            tarjetasForm.innerHTML = "";
            /*await updateDocument(collection,id,{
                pregunta:pregunta,
                tipoRespuesta:tipoRespuesta,
                preguntaDepende:preguntaDepende,
                preguntaDependiente:preguntaDependiente,
                respuestaDepende:respuestaDepende,
                opcionesRespuestas:{

                }

            })*/
        } catch (error) {
            console.log(error);
        }
    } else {
        try {
            const doc = await getDocument(collection, localStorage.getItem("idUpdateForm"))
            const preguntas = doc.data();

        } catch (error) {
            console.log(error);
        }
    }
})
function nose(){
    // const agregarRespuesta = document.getElementById("agregarRespuesta");
    console.log("hola")
}