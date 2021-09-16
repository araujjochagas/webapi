import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {UsuarioComponent} from './Usuario/Usuario.component';
import {UsuarioComponent} from './Usuario/Usuario.component';


const routes: Routes = [
{path:'Usuario',component:UsuarioComponent},
{path:'Usuario',component:UsuarioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
