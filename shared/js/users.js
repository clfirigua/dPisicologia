import { addUser } from "./crudFirebase.js";

/*Declaraciones */
const name = document.getElementById("name").value;
const lastName = document.getElementById("lastName").value;
const identification = document.getElementById("identification").value;
const phone = document.getElementById("phone").value;
const email = document.getElementById("email").value;
const address = document.getElementById("address").value;
const rh = document.getElementById("rh").value;
const gender = document.getElementById("gender");
const btn = document.getElementById("btn-add-user");
const password = "123456";



    btn.addEventListener("click", ()=>{
        addUser(name,lastName,identification,phone,email,password,address,rh,gender.value)
        
   
})
