import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

import { AppComponent } from './app.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { AcercaDeMiComponent } from './Componentes/acerca-de-mi/acerca-de-mi.component';
import { NavBarComponent } from './Componentes/nav-bar/nav-bar.component';
import { ExperienciaComponent } from './Componentes/experiencia/experiencia.component';
import { FormacionAcademicaComponent } from './Componentes/formacion-academica/formacion-academica.component';
import { HabilidadesComponent } from './Componentes/habilidades/habilidades.component';
import { ProyectoComponent } from './Componentes/proyecto/proyecto.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { BotonesComponent } from './Componentes/botones/botones.component';
import { RegistrarseComponent } from './Componentes/registrarse/registrarse.component';
import { BotonLogOutComponent } from './Componentes/boton-log-out/boton-log-out.component';
import { InfoComponent } from './Componentes/info/info.component';

import { ModalDescripcionComponent } from './Modales/modal-descripcion/modal-descripcion.component';
import { ModalLoginComponent } from './Modales/modal-login/modal-login.component';
import { ModalAcercaDeMiiComponent } from './Modales/modal-acerca-de-mii/modal-acerca-de-mii.component';
import { ModalExperenciaComponent } from './Modales/modal-experencia/modal-experencia.component';
import { ModalFormacionComponent } from './Modales/modal-formacion/modal-formacion.component';
import { ModalHabilidadesComponent } from './Modales/modal-habilidades/modal-habilidades.component';
import { ModalProyectosComponent } from './Modales/modal-proyectos/modal-proyectos.component';
import { ModalRegistrarseComponent } from './Modales/modal-registrarse/modal-registrarse.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AcercaDeMiComponent,
    NavBarComponent,
    ExperienciaComponent,
    FormacionAcademicaComponent,
    HabilidadesComponent,
    ProyectoComponent,
    FooterComponent,
    ModalLoginComponent,
    BotonesComponent,
    RegistrarseComponent,
    BotonLogOutComponent,
    ModalDescripcionComponent,
    InfoComponent,
    ModalAcercaDeMiiComponent,
    ModalExperenciaComponent,
    ModalFormacionComponent,
    ModalHabilidadesComponent,
    ModalProyectosComponent,
    ModalRegistrarseComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
