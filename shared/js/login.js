import { validarUser} from "./crudFirebase.js"
const btn = document.getElementById("btn-login");
const form = document.querySelector('form');


btn.addEventListener("click",()=>{
    const [user, password] = form.querySelectorAll('input');
    validarUser(user.value, password.value)
})