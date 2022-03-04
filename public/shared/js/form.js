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
<<<<<<< HEAD
<<<<<<< HEAD
            tarjetasForm.innerHTML = "";
            const dataForm = doc.data();
            const lenghtForm = Object.keys(dataForm).length
            console.log(lenghtForm);
            for (let i = 1; i <= lenghtForm; i++) {
                const targetDataForm = dataForm[`${i}`];
                if((targetDataForm).preguntaDepende=="Si"){
                        $('#dependencia').append(
                            `
=======
            tarjetasForm.innerHTML = "";
            const dataForm = doc.data();
            const delta = Object.keys(dataForm)
            delta.map((item) => {
                contPreguntas=item
            });
            for (let i = 0; i < delta.length; i++) {
                const targetDataForm = dataForm[`${delta[i]}`];
                if ((targetDataForm).preguntaDepende == "Si") {
                    $('#dependencia').append(
                        `
>>>>>>> parent of c333af0... añadir la edicion de los formularios
                            <p class="ms-3 text-capitalize">${targetDataForm.preguntaDepende}</p>
                            <p class="ms-3 text-capitalize">${targetDataForm.preguntaDependiente}</p>
                            <p class="ms-3 text-capitalize">${targetDataForm.respuestaDepende}</p>
                            `
<<<<<<< HEAD
                        )
                    }
                    $('#tarjetas-form').append(
                        `
                        <div class="container tarjeta-sombra mt-4">
=======
                    )
                }
                $('#tarjetas-form').append(
                    `
                        <div class="container tarjeta-sombra">
>>>>>>> parent of c333af0... añadir la edicion de los formularios
                        <!-- targetas generadas -->
            
                        <p class="ms-3 text-capitalize">${targetDataForm.pregunta}</p>
                        <p class="ms-3 text-capitalize">${targetDataForm.tipoRespuesta}</p>
                        <div id="dependencia">
                        
                        </div>
<<<<<<< HEAD
                        <div id="opciones">
                        </div>
                        <div class="d-grid gap-2 mx-auto ">
                            <button class="btn btn-warning update-question" type="button" data-bs-toggle="modal"
                                data-bs-target="#exampleModal" data-id=${targetDataForm}>editar</button>
                            <button class="btn btn-danger mb-2 delete-question" type="button" data-id=${targetDataForm}>eliminar</button>
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

            }
            const btnDeleteForm = document.querySelectorAll('.delete-question');
            const btnUpdateForm = document.querySelectorAll('.update-question');

            btnDeleteForm.forEach((btn)=>{
                btn.addEventListener("click", async ({ target: { dataset } }) => {
                    try {
                        
                        // await deleteDocuments(collection, dataset.id);
                    }
                    catch (error) {
                        console.log(error);
                    }
                })
            })
            
            btnUpdateForm.forEach((btn)=>{
                
                btn.addEventListener("click",async(e)=>{
                    try{
                        console.log(e);
                        const doc = await getDocument(collection,e.target.dataset.id)
0                    }catch(error){
                        console.log(error)
                    }
                })
            })

=======
            mostrarTarjetas(doc,id)
>>>>>>> master
=======
                        <div id="${i}">
                        </div>
                        <div class="d-grid gap-2 mx-auto ">
                            <button class="btn btn-warning update-form"  data-id=${delta[i]} type="button" data-bs-toggle="modal"
                                data-bs-target="#exampleModal">editar</button>
                            <button class="btn btn-danger mb-2 delete-form" data-id=${delta[i]} type="button">eliminar</button>
                        </div>
                        </div>
                        `
                )
                targetDataForm.objetRespuestas.forEach(respuesta => {
                        $(`#${i}`).append(`
                        <p class="ms-3 tezt-capitalize">${respuesta}</p>
                    `)
                    });

                const btnDeleteForm = document.querySelectorAll('.delete-form');
                const btnUpdateForm = document.querySelectorAll('.update-form');


                btnDeleteForm.forEach((btn) => {
                    btn.addEventListener("click", async ({ target: { dataset } }) => {
                        try {
                            console.log(dataset)
                        }
                        catch (error) {
                            console.log(error);
                        }
                    })
                })
                btnUpdateForm.forEach((btn) => {
                    btn.addEventListener("click", async (e) => {
                        try {
                            const idTarget = e.target.dataset.id;

                            const doc = await getDocument(collection, id);

                            const query = doc.data()[`${idTarget}`];

                            form['pregunta'].value = query.pregunta;
                            form['tiporespuesta'].value = query.tipoRespuesta;
                            form['preguntadepende'].value = query.preguntaDepende;
                            form['preguntadependiente'].value = query.preguntaDependiente;
                            form['respuestadepende'].value = query.respuestaDepende;

                        } catch (error) {
                            console.log(error)
                        }
                    })
                })

            }


>>>>>>> parent of c333af0... añadir la edicion de los formularios
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
        cont++
        if (tipo == "Opcion multiple") {
            const multiple = document.getElementById('multiple');
            $(multiple).append(
                `
                <div class="form-check opcion-respuesta" id="+${cont}" >
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
                    const target = document.getElementById(id)
                    multiple.removeChild(target);
                    cont - 1;
                })
            );
        } else {
            if (tipo == "Opcion unica") {
                const unica = document.getElementById("unica");
                $(unica).append(
                    `
                    <div class="form-check opcion-respuesta" id="+${cont}">
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



$('#agregarPregunta').click(function (e) {
    e.preventDefault();
    contPreguntas++
});


butttom.addEventListener('click', async (e) => {
    e.preventDefault();
    let id = localStorage.getItem("idAddForm")
    const objetRespuestas = [];

    for (let i = 1; i <= cont; i++) {
        const data = document.getElementById("+"+i);
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
    console.log(preguntasFormulario)
    await updateDocument(collection, id, preguntasFormulario)
    window.location.reload();

})



