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
            const dataForm = doc.data();
            const lenghtForm = Object.keys(dataForm).length
            for (let i = 1; i <= lenghtForm; i++) {
                const targetDataForm = dataForm[`${i}`];
            console.log(targetDataForm)
                if((targetDataForm).preguntaDepende=="Si"){
                        $('#dependencia').append(
                            `
                            <p class="ms-3 text-capitalize">${targetDataForm.preguntaDepende}</p>
                            <p class="ms-3 text-capitalize">${targetDataForm.preguntaDependiente}</p>
                            <p class="ms-3 text-capitalize">${targetDataForm.respuestaDepende}</p>
                            `
                        )
                    }
                    $('#tarjetas-form').append(
                        `
                        <div class="container tarjeta-sombra">
                        <!-- targetas generadas -->
            
                        <p class="ms-3 text-capitalize">${targetDataForm.pregunta}</p>
                        <p class="ms-3 text-capitalize">${targetDataForm.tipoRespuesta}</p>
                        <div id="dependencia">
                        
                        </div>
                        <div id="opciones">
                        </div>
                        <div class="d-grid gap-2 mx-auto ">
                            <button class="btn btn-warning update-form"  data-id=${targetDataForm[0]} type="button" data-bs-toggle="modal"
                                data-bs-target="#exampleModal">editar</button>
                            <button class="btn btn-danger mb-2 delete-form" data-id=${targetDataForm} type="button">eliminar</button>
                        </div>
                        </div>
                        `
                    )
                    targetDataForm.objetRespuestas.forEach(respuesta => {
                        $('#opciones').append(`
                        <p class="ms-3 tezt-capitalize">${respuesta}</p>
                    `)
                    });
                    contPreguntas++

                    const btnDeleteForm = document.querySelectorAll('.delete-form');
                    const btnUpdateForm = document.querySelectorAll('.update-form');


                    btnDeleteForm.forEach((btn)=>{
                        btn.addEventListener("click", async ({ target: { dataset } }) => {
                            try {
                                console.log(dataset)
                            }
                            catch (error) {
                                console.log(error);
                            }
                        })
                    })
                    btnUpdateForm.forEach((btn)=>{
                        btn.addEventListener("click",async(e)=>{
                            try{
                                console.log(e)
                            }catch(error){
                                console.log(error)
                            }
                        })
                    })

            }


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
                    // e.preventDefault()
                    // const { id } = e.target.dataset
                    // const target = document.getElementById(id)
                    // multiple.removeChild(target);
                    // cont - 1;
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
        id:contPreguntas,
        objetRespuestas
    }
    await updateDocument(collection, id, preguntasFormulario)
    window.location.reload();

})

$('#agregarPregunta').click(function (e) {
    e.preventDefault();
    contPreguntas++
    console.log(contPreguntas)
});



