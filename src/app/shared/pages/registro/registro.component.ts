import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {
  miFormulario:FormGroup = this.fb.group({
    nombre:['', [Validators.required]],
    apellido:['', [Validators.required]],
    correo:['', [Validators.required]],
    direccion:['', [Validators.required]],
    identificacion:['', [Validators.required]],
  })

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  guardar(){
    console.log(this.miFormulario.value)
  }
  validar(campo:string){
    // return this.miFormulario.
  }
}
