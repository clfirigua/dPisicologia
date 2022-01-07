import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styles: [
  ]
})
export class RolesComponent implements OnInit {
  miFormulario:FormGroup = this.fb.group({
    nombre:['', Validators.required],
    panel:[false],
    usuario:[false],
    cuentas:[false],
    formulario:[false],
    informes:[false],
    papelera:[false],
    roles:[false],

  })
  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
    // this.miFormulario.reset({
    //   panel:true
    // })
  }

 
 
}


