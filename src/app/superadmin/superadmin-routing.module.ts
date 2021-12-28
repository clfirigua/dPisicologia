import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    // children:[
    //   {
    //     path:'panel',
    //     component: PanelComponent
    //   },
    //   {
    //     path:'roles',
    //     component: RolesComponent
    //   },
    //   {
    //     path:'usuarios',
    //     component:UsuariosComponent
    //   },
    //   {
    //     path:'cusuarios',
    //     component:CusuariosComponent
    //   },
    //   {
    //     path:'editusuarios/:id',
    //     component:CusuariosComponent
    //   },
    //   {
    //     path:'cseguridad',
    //     component:CseguridadComponent
    //   },
    //   {
    //     path:'exportar',
    //     component:ExportarComponent
    //   },
    //   {
    //     path:'cformulario',
    //     component:CformularioComponent
    //   },
    //   {
    //     path:'aformulario',
    //     component:AformularioComponent
    //   },
    //   {
    //     path:'papelera',
    //     component:PapeleraComponent
    //   },
    //   {
    //     path:'informes',
    //     component:InformeComponent
    //   },
    //   {
    //     path:'**',
    //     redirectTo:'panel'
    //   }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperadminRoutingModule { }
