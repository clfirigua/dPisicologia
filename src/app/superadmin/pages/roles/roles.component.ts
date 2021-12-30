import { Component, OnInit } from '@angular/core';
import { SelectItem, PrimeNGConfig, MenuItem } from "primeng/api";
@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styles: [
  ]
})
export class RolesComponent implements OnInit {
  items: MenuItem[] = [];
  valores: any = [{ label: 'Off', value: 'off' }, { label: 'On', value: 'on' }]
  panelValue: any[] = this.valores;
  usuariosValue: any[] = this.valores;
  cuentasValue: any[] = this.valores;
  rolesValue: any[] = this.valores;
  papeleraValue: any[] = this.valores;
  formularioValue: any[] = this.valores;
  informesValue: any[] = this.valores;
  panel: string = "off";
  usuarios: string = "off";
  cuentas: string = "off";
  roles: string = "off";
  papelera: string = "off";
  formulario: string = "off";
  informes: string = "off";

  constructor(private primeNGConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primeNGConfig.ripple = true;
  }
  validar(index: number) {
    switch (index) {
      case 0:
        if(this.panel== 'on'){
          this.items.push({
            label: 'Panel',
            icon: 'pi pi-chart-bar',
            routerLink:'panel'
          })
        }else{
          this.buscarEliminar('Panel');
        }
        break;
      case 1:
        if(this.usuarios== 'on'){
          this.items.push( {
            label: 'Usuarios',
            icon: 'pi pi-user',
            items:[
              {
                label: 'Lista usuarios',
                icon: 'pi pi-align-justify',
                routerLink:'usuarios'
              },
              {
                label: 'Crear usuario',
                icon: 'pi pi-user',
                routerLink:'cusuarios'
              }
            ]
            
          })
        }else{
          this.buscarEliminar('Usuarios');
        }
        break;
      case 2:
        if(this.cuentas== 'on'){
          this.items.push({
            label: 'Cuentas',
            icon: 'pi pi-sitemap',
            items:[
            {
              label:'Copia de seguridad',
              icon: 'pi pi-shield',
              routerLink:'cseguridad'
            },
            {
              label:'Cargar usuarios',
              icon: 'pi pi-file-excel',
              routerLink:'cusuarios'
            },
            {
              label:'exportar usuarios',
              icon: 'pi pi-file-excel',
              routerLink:'exportar'
            }
          ]
            
        })
        }else{
          this.buscarEliminar('Cuentas');
        }
        break;
      case 3:
        if(this.roles== 'on'){
          this.items.push({
            label:'Roles',
            routerLink:'Roles'
          })
        }else{
          this.buscarEliminar('Roles');
        }
        break;
      case 4:
        if(this.formulario == 'on'){
          this.items.push({
            label:'Formularios',
            items:[
              {
                label:'Crear formulario',
                icon:'pi pi-plus',
                routerLink:'cformulario'
              },
              {
                label:'Asignar formulario',
                icon:'pi pi-sitemap',
                routerLink:'aformulario'
              }
            ]
          })
        }else{
          this.buscarEliminar('Formularios');
        }
        break;
      case 5:
        if(this.informes== 'on'){
          this.items.push( {
            label:'informes',
            icon:'pi pi-file',
            routerLink:'informes'
          } )
        }else{
          this.buscarEliminar('informes');
        }
        break;
      case 6:
        if(this.papelera== 'on'){
          this.items.push( {
            label: 'Papelera',
            icon:'pi pi-replay',
            routerLink:'papelera'
          })
        }else{
          this.buscarEliminar('Papelera');
        }
        break;
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
}


