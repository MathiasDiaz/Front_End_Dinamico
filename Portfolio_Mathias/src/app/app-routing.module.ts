import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { RouterModule,Routes } from '@angular/router';

const routes: Routes =[
{path:'inicio', component:InicioComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
