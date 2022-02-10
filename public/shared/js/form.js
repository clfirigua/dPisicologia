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



const boton = (tipo) => {
    respuestas.innerHTML += `<button class="btn btn-success" id="respuesta"> Respuesta </button>`;
    const btn = document.getElementById('respuesta');
    btn.addEventListener('click', (event) => {
        event.preventDefault();
        if (tipo == "Opcion multiple") {
            const multiple = document.getElementById('multiple');

            multiple.innerHTML += `
                <div class="form-check opcion-respuesta" id="${cont}" >
                    <input type="text" class="inp-bottom-line" placeholder="opcion multiple">
                    <button class="btn btn-danger eliminar" data-id="${cont}">Eliminar</button>
                </div>
           `
            const btnDeleteTable = document.querySelectorAll('.eliminar');
            btnDeleteTable.forEach((btn) =>
                btn.addEventListener("click", (e) => {
                    e.preventDefault()
                    const { id } = e.target.dataset
                    console.log(id)
                    const target = document.getElementById(id)
                    multiple.removeChild(target);
                    cont - 1;
                })
            );
            cont++
        } else {
            if (tipo == "Opcion unica") {
                const unica = document.getElementById("unica");
                unica.innerHTML += `
                <div class="form-check opcion-respuesta" id="${cont}">
                    <input type="text" class="inp-bottom-line" placeholder="opcion unica">
                    <button class="btn btn-danger eliminar" data-id="${cont}">Eliminar</button>
                </div>`
                const btnDeleteTable = document.querySelectorAll('.eliminar');
                btnDeleteTable.forEach((btn) =>
                    btn.addEventListener("click", (e) => {
                        e.preventDefault()
                        const { id } = e.target.dataset
                        const target = document.getElementById(id)
                        unica.removeChild(target);
                        cont - 1;
                    })
                );
                cont++

            }

        }
    })



}

tipoRespuesta.addEventListener("change", (e) => {
    let tipo = e.target.value;
    respuestas.innerHTML = ""
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
            boton(tipo);
            break;
        case "Opcion unica":
            respuestas.innerHTML += `
            <div class="mb-3" id="unica">
                <label for="opcionunica" class="col-form-label">Opcion unica</label>
            </div>`
            boton(tipo);
            break;
        default:
            respuestas.innerHTML += `
                <p>Selecciona un tipo de respuesta</p>
            `
            break;
    }
})

butttom.addEventListener('click', async (e) => {
    e.preventDefault();
    let id = localStorage.getItem("idAddForm")
    let objetRespuestas
    for (let i = 0; i < cont; i++) {
        const data = document.getElementById(i);
        if (data?.children[0]?.value != undefined) {
            objetRespuestas = [data?.children[0]?.value]
            objetRespuestas.push(objetRespuestas)
        }
    }
    await updateDocument(collection, id, {
        pregunta: pregunta.value,
        tipoRespuesta: tipoRespuesta.value,
        preguntaDepende: preguntaDepende.value,
        preguntaDependiente: preguntaDependiente.value,
        respuestaDepende: respuestaDepende.value,
        respuestas: ["dads","das",2],

    })
})

