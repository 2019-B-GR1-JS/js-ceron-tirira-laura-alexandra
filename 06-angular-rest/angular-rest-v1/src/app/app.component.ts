import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { FILAS } from './constantes/numero-filas-por-tabla';
import {MatDialog} from "@angular/material/dialog";
import {ModalEditarUsuarioComponent} from "./modales/modal-editar-usuario/modal-editar-usuario.component";
import {addThemeToAppStyles} from "@angular/material/schematics/ng-add/theming/theming";
import {error} from "util";
import {UsuarioRestService} from "./services/rest/usuario-rest.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
constructor(){}
ngOnInit(): void {
}

  //
  //
  ///
  //
  //inicio
  //login
  //gestion de usuarios ->componentes
      //gestion de libros
  //      /Buscar libros
  //      /Crear libros
  //      /Editar libros

  //cada ruta es un componente





}


