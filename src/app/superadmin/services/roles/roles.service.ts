import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor() { }

  items = [
    {
        label: 'Panel',
        icon: 'pi pi-chart-bar',
        routerLink:'panel'
    },
    {
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
      
    },
    {
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
      
  },
  {
    label:'Roles',
    routerLink:'Roles'
  },
  {
    label: 'Papelera',
    icon:'pi pi-replay',
    routerLink:'papelera'
  },
  {
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
  },
  {
    label:'Informes',
    icon:'pi pi-file',
    routerLink:'informes'
  }
];

  
}
