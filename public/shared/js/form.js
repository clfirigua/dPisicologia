import { addDocument, onGetDocuments, deleteDocuments, getDocument, updateDocument } from "./crudFirebase.js";

const pregunta = document.getElementById("pregunta");
const tipoRespuesta = document.getElementById("tiporespuesta");
const preguntaDepende = document.getElementById("preguntadepende");
const preguntaDependiente = document.getElementById("preguntadependiente");
const respuestaDepende = document.getElementById("respuestadepende");
const form = document.getElementById("form");
const tarjetasForm = document.getElementById("tarjetas-form")
const respuestas = document.getElementById("respuestas");
const butttom = document.getElementById("guardarDatos");
let cont = 0;
let preguntas = [];

let collection = "Formularios";


const boton = (tipo) => {
    respuestas.innerHTML += `<button class="btn btn-success" id="respuesta"> Respuesta </button>`;
    const btn = document.getElementById('respuesta');
    btn.addEventListener('click', (event) => {
        event.preventDefault();
        if (tipo) {
            const multiple = document.getElementById('multiple');

             multiple.innerHTML += `
                <div class="form-check" id="${cont}" >
                    <i class="far fa-check-square">
                        <input type="text" class="inp-bottom-line" placeholder="opcion multiple">
                        <button class="btn btn-danger data" data-id="${cont}">Eliminar</button>
                    </i>
                </div>
           `
           const btnDeleteTable = document.querySelectorAll('.data');
           btnDeleteTable.forEach((btn) =>
                   btn.addEventListener("click",  (e) => { 
                       e.preventDefault()
                        const {id} = e.target.dataset 
                        const target = document.getElementById(id)
                        multiple.removeChild(target);
                        cont-1;
                   })
               );
          cont++
        } else {

        }
    })



}

tipoRespuesta.addEventListener("change", (e) => {
    let tipo = e.target.value;

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
            respuestas.innerHTML += `
            <div class="mb-3">
                <textarea name="" id="" rows="5" placeholder="Respuesta larga"></textarea>
            </div>`;
            break;
        case "Opcion multiple":
            respuestas.innerHTML += `
            <div class="mb-3" id="multiple">
                <label for="opcionmultiple" class="col-form-label">Opcion multiple</label>

            </div>`
            boton(true);
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
            boton(false);
            break;
        default:
            respuestas.innerHTML += `
                <p>Selecciona un tipo de respuesta</p>
            `
            break;
    }
})

butttom.addEventListener('click', (event)=>{
    event.preventDefault();
    for(let i=0; i< cont; i++){
          const data = document.getElementById(i);
            if(data?.children[0]?.children[0]?.value  != undefined){
                const pregunta = data?.children[0]?.children[0]?.value
                preguntas.push({pregunta})
            }
          
          
    }
    console.log(preguntas)
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
});

