import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './Usuario/Usuario.component';
import { ShowDepComponent } from './Usuario/show-dep/show-usu.component';
import { AddEditDepComponent } from './Usuario/add-edit-dep/add-edit-usu.component';
import { UsuarioComponent } from './Usuario/Usuario.component';
import { ShowEmpComponent } from './Usuario/show-emp/show-emp.component';
import { AddEditEmpComponent } from './Usuario/add-edit-emp/add-edit-emp.component';
import{SharedService} from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    ShowDepComponent,
    AddEditDepComponent,
    UsuarioComponent,
    ShowEmpComponent,
    AddEditEmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
