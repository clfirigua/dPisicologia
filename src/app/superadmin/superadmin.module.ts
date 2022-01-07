import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperadminRoutingModule } from './superadmin-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { RolesComponent } from './pages/roles/roles.component';
import { PrimengModule } from '../primeng/primeng.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';




@NgModule({
  declarations: [
    HomeComponent,
    RolesComponent,
  ],
  imports: [
    CommonModule,
    SuperadminRoutingModule,
    SharedModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SuperadminModule { }
