import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './pages/menu/menu.component';
import { PrimengModule } from '../primeng/primeng.module';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistroComponent } from './pages/registro/registro.component';


@NgModule({
  declarations: [
    MenuComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    MenuComponent
  ]
})
export class SharedModule { }
