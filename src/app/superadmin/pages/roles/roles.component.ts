import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig, MenuItem } from "primeng/api";
import { RolesService } from '../../services/roles/roles.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styles: [
  ]
})
export class RolesComponent implements OnInit {
  campos:any;
  items: MenuItem[] = [];
  valores: any = [{ label: 'Off', value: 'off' }, { label: 'On', value: 'on' }]

  constructor( private roles:RolesService) { }

  ngOnInit(): void {
    this.campos = this.roles.formatoRoles();
  }

  validar(index: number,estado:string,label:string) {
    switch (index) {
      case 0:
        this.validarCondicion(estado,index,label)
        break;
      case 1:
        this.validarCondicion(estado,index,label)
        break;
      case 2:
        this.validarCondicion(estado,index,label)
        break;
      case 3:
        this.validarCondicion(estado,index,label)
        break;
      case 4:
        this.validarCondicion(estado,index,label)
        break;
      case 5:
        this.validarCondicion(estado,index,label)
        break;
      case 6:
        this.validarCondicion(estado,index,label)
        break;
    }
  }
  validarCondicion(estado:string, index:number, label:string){
    if(estado == 'on'){
      if(this.buscarGuardar(label)){
        this.items.push(this.roles.getMenu(index))
      }
    }else{
      this.buscarEliminar(label);
    }
  }
  buscarEliminar(dta:string){
    if(this.items.length == 0){
      return
    }
    this.items.forEach((valor, index)=>{
      if(valor.label == dta){
        this.items.splice(index, 1);
      }
    });
  }

  buscarGuardar(label:string):boolean{
    let estado:boolean = false;
    let cont:number = 0;
    if(this.items.length == 0){
       return estado=true
    }
    this.items.forEach(dta=>{
      if(label == dta.label){
        estado=false;
        cont=1;
      }
      if(cont == 0){
        estado= true
      }
    })
    console.log(estado)
    return estado
  }
 
}


