import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from '../shared/pages/registro/registro.component';
import { FormularioComponent } from '../shared/pages/formularios/formulario.component';
import { HomeComponent } from './pages/home/home.component';
import { RolesComponent } from './pages/roles/roles.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    children:[
      {
        path:'Roles',
        component:RolesComponent
      },
      {
        path:'Cusuarios',
        component:RegistroComponent
      },
      {
        path:'Formularios',
        component:FormularioComponent
      },
      {
        path:'**',
        redirectTo:'panel'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperadminRoutingModule { }
