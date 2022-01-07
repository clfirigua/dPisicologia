import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];
  
  constructor() { }

  ngOnInit(): void {
    this.items = [
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
            routerLink:'Cusuarios'
          }
        ]
        
      },
      {
        label: 'Cuentas',
        icon: 'pi pi-sitemap',
        items:[{
          label:'Roles',
          routerLink:'Roles'
        },
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
          routerLink:'Formularios',
        },
        {
          label:'Asignar formulario',
          icon:'pi pi-sitemap',
          routerLink:'aformulario'
        }
      ]
    },
    {
      label:'informes',
      icon:'pi pi-file',
      routerLink:'informes'
      //TODO: los informse no se han definido
    }
  ];
  }
  }


