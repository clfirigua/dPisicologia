import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './pages/menu/menu.component';
import { PrimengModule } from '../primeng/primeng.module';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MenuComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    FormsModule
  ],
  exports:[
    MenuComponent
  ]
})
export class SharedModule { }
