import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {UsuarioRestService} from "./services/rest/usuario-rest.service";
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {InputTextModule} from "primeng";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";
import { ModalEditarUsuarioComponent } from './modales/modal-editar-usuario/modal-editar-usuario.component';
import {MatDialogModule} from "@angular/material/dialog";
import { RutaInicioComponent } from './rutas/ruta-inicio/ruta-inicio.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaGestionUsuariosComponent } from './rutas/ruta-gestion-usuarios/ruta-gestion-usuarios.component';
import { RutaGestionLibrosComponent } from './rutas/ruta-gestion-libros/ruta-gestion-libros.component';
import { RutaCrearLibroComponent } from './rutas/ruta-crear-libro/ruta-crear-libro.component';
import { RutaBuscarLibroComponent } from './rutas/ruta-buscar-libro/ruta-buscar-libro.component';
import { RutaEditaLibroComponent } from './rutas/ruta-edita-libro/ruta-edita-libro.component';
import {LibroRestService} from "./services/rest/libro-rest.service";
@NgModule({
  declarations: [
    AppComponent,
    ModalEditarUsuarioComponent,
    RutaInicioComponent,
    RutaLoginComponent,
    RutaGestionUsuariosComponent,
    RutaGestionLibrosComponent,
    RutaCrearLibroComponent,
    RutaBuscarLibroComponent,
    RutaEditaLibroComponent //componentes
  ],
  entryComponents: [
    ModalEditarUsuarioComponent
  ],
  imports: [ //modulos
    BrowserModule, //ngfor, ngif
    AppRoutingModule,
    FormsModule, //formularios
    HttpClientModule, //http
    ButtonModule,
    TableModule,
    InputTextModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDialogModule
  ],
  providers: [ //servicios
    UsuarioRestService,
    LibroRestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
