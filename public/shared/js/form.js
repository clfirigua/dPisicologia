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
const collection = "Formularios";
let cont = 0;
let contPreguntas = 0;




window.addEventListener("DOMContentLoaded", async (e) => {

    if (localStorage.getItem("estado") == "creando") {
        try {
            let id = localStorage.getItem("idAddForm")
            const doc = await getDocument(collection, id);
            tarjetasForm.innerHTML = "";
            const dataForm = [doc.data()]
            dataForm.forEach((target, index) =>{
                const targetDataForm = target[index+1];
                $('#tarjetas-form').append(
                    `
                    <div class="container tarjeta-sombra">
                    <!-- targetas generadas -->
        
                    <p class="ms-3 text-capitalize">pregunta del formulario</p>
                    <p class="ms-3 text-capitalize">tipo de respuesta</p>
                    <!-- si la respesta es pregunta abierta, unica respuesta, multiple respuesta-->
                    <p class="ms-3 text-capitalize">si la pregunta depende de alguna</p>
                    <!--Debe decir de que pregunta depende y si depende cual respuesta depende -->
                    <p class="ms-3 text-capitalize">repuesta depende</p>
                    <div id="opciones">
                        <p class="ms-3 tezt-capitalize">opcion 1</p>
                        <p class="ms-3 tezt-capitalize">opcion 2</p>
                    </div>
                    <div class="d-grid gap-2 mx-auto ">
                        <button class="btn btn-warning" type="button" data-bs-toggle="modal"
                            data-bs-target="#exampleModal">editar</button>
                        <button class="btn btn-danger mb-2" type="button">eliminar</button>
                    </div>
                    </div>
                    `
                )
            })

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
            $(multiple).append(
                `
                <div class="form-check opcion-respuesta" id="${cont}" >
                <input type="text" class="inp-bottom-line" placeholder="opcion multiple">
                <button class="btn btn-danger eliminar" data-id="${cont}">Eliminar</button>
                </div>

                `
            )
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
                $(unica).append(
                    `
                    <div class="form-check opcion-respuesta" id="${cont}">
                    <input type="text" class="inp-bottom-line" placeholder="opcion unica">
                    <button class="btn btn-danger eliminar" data-id="${cont}">Eliminar</button>
                    </div>
                    `
                )
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
    const id = localStorage.getItem("idAddForm")
    const objetRespuestas = [];

    for (let i = 0; i < cont; i++) {
        const data = document.getElementById(i);
        const dataMin = data?.children[0]?.value;
        if (dataMin != undefined) {
            objetRespuestas.push(dataMin)
        }
    }
    const preguntasFormulario = {};
    preguntasFormulario[contPreguntas] =
    {
        pregunta: pregunta.value,
        tipoRespuesta: tipoRespuesta.value,
        preguntaDepende: preguntaDepende.value,
        preguntaDependiente: preguntaDependiente.value,
        respuestaDepende: respuestaDepende.value,
        objetRespuestas
    }
    await updateDocument(collection, id, preguntasFormulario)


})

$('#agregarPregunta').click(function (e) {
    e.preventDefault();
    contPreguntas++
});

function contarLetras(letras) {
    var objeto = {};
    for (var i in letras) {
        objeto[letras[i]] = (objeto[letras[i]] || 0) + 1;
    }
    return objeto;
}


