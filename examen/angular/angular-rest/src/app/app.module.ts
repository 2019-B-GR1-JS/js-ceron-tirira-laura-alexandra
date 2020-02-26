import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ProfesorRestService} from "./services/rest/profesor-rest.service";
import {CursoRestService} from "./services/rest/curso-rest.service";
import {DetCarritoRestService} from "./services/rest/detCarrito-rest.service";
import {CabCarritoRestService} from "./services/rest/cabCarrito-rest.service";
import {UsuarioRestService} from "./services/rest/usuario-rest.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RutaInicioComponent } from './rutas/ruta-inicio/ruta-inicio.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaGestionUsuariosComponent } from './rutas/ruta-gestion-usuarios/ruta-gestion-usuarios.component';
import { RutaGestionProfesoresComponent } from './rutas/ruta-gestion-profesores/ruta-gestion-profesores.component';
import { RutaGestionCursosComponent } from './rutas/ruta-gestion-cursos/ruta-gestion-cursos.component';
import { RutaGestionCabCarritoComponent } from './rutas/ruta-gestion-cab-carrito/ruta-gestion-cab-carrito.component';
import { RutaGestionDetCarritoComponent } from './rutas/ruta-gestion-det-carrito/ruta-gestion-det-carrito.component';
import { ModalEditarProfesorComponent } from './modales/modal-editar-profesor/modal-editar-profesor.component';
import { ModalEditarUsuarioComponent } from './modales/modal-editar-usuario/modal-editar-usuario.component';
import { ModalEditarCursoComponent } from './modales/modal-editar-curso/modal-editar-curso.component';
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {InputTextModule} from "primeng";
import {AuthServices} from "./services/auth/authService";
import {EstaLogeadoPolicy} from "./services/auth/politicas/esta_logeado.policy";
import {EsAdministradorPolicy} from "./services/auth/politicas/es_administrador.policy";
import {EsUsuarioPolicy} from "./services/auth/politicas/es_usuario.policy";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatMenuModule} from "@angular/material/menu";
import {MatSelectModule} from "@angular/material/select";
import {MatToolbarModule} from "@angular/material/toolbar";
import { RutaGestionComprasComponent } from './rutas/ruta-gestion-compras/ruta-gestion-compras.component';
import {MatStepperModule} from "@angular/material/stepper";
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator} from "@angular/material/paginator";

@NgModule({
  declarations: [
    AppComponent,
    RutaInicioComponent,
    RutaLoginComponent,
    RutaGestionUsuariosComponent,
    RutaGestionProfesoresComponent,
    RutaGestionCursosComponent,
    RutaGestionCabCarritoComponent,
    RutaGestionDetCarritoComponent,
    ModalEditarProfesorComponent,
    ModalEditarUsuarioComponent,
    ModalEditarCursoComponent,
    RutaGestionComprasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    MatDialogModule,
    MatButtonModule,
    MatMenuModule,
    MatSelectModule,
    MatToolbarModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatTableModule,
  ],
  entryComponents: [
    ModalEditarProfesorComponent,
    ModalEditarCursoComponent,
    ModalEditarUsuarioComponent
  ],
  providers: [
    ProfesorRestService,
    CursoRestService,
    DetCarritoRestService,
    CabCarritoRestService,
    UsuarioRestService,
    AuthServices,
    EstaLogeadoPolicy,
    EsAdministradorPolicy,
    EsUsuarioPolicy,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
