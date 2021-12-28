import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../../services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('miFormulario')formulario!:NgForm
  constructor(public login:LoginService, private route: Router) { }

  ngOnInit(): void {
  }
  validarusuario(){
    if(this.formulario?.controls['usuario'].value.includes('@')){
      this.login.getiduser(this.formulario?.controls['usuario'].value).subscribe(data => {
        if(data.length == 0){
          console.log('Usuario o contraseña invalida')
        }else{

          if(data[0].password === this.formulario?.controls['password'].value){
              localStorage.setItem('data', JSON.stringify(data[0]))
              this.route.navigate(['./superadmin']);
          }else{
            console.log('los datos ingresadon no son validos')
            this.formulario.resetForm();
          }
        }
       
      })
    }else{
      console.log('falta @')
    }
  }
  validarenvio(){
    if (this.formulario?.invalid == undefined ){return false};
    return this.formulario?.invalid
  }
}
// TODO: formatear formulario this.formulario.resetForm()