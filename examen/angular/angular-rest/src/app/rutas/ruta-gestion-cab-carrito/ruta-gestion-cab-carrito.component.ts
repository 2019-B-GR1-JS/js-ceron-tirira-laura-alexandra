import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {CursoRestService} from "../../services/rest/curso-rest.service";
import { FILAS } from 'src/app/constantes/numero-filas-por-tablas';
import {ModalEditarCursoComponent} from "../../modales/modal-editar-curso/modal-editar-curso.component";

@Component({
  selector: 'app-ruta-gestion-cab-carrito',
  templateUrl: './ruta-gestion-cab-carrito.component.html',
  styleUrls: ['./ruta-gestion-cab-carrito.component.scss']
})
export class RutaGestionCabCarritoComponent implements OnInit {
  url = 'http://localhost:1337';
  cursos = [];
  FILAS = FILAS;
  codigoFiltrado = '';
  nombreFiltrado = '';
  descripcionFiltrado = '';
  materiaFiltrado = '';
  precioFiltrado='';
  busquedaCurso ='';
  estadoFiltrado="";
  constructor(
    private readonly _httpClient: HttpClient,
    private readonly _matDialog: MatDialog,
    private readonly _cursoRestService: CursoRestService
  ) { }

  ngOnInit() {
    const urlCursos = this.url + '/curso';
    // $ -> Observable
    const cursos$ = this._httpClient.get(
      urlCursos
    );
    cursos$
      .subscribe(
        (cursos: any[]) => { // TRY
          console.log('Cursos: ', cursos);
          this.cursos = cursos;
        },
        (error) => { // CATCH
          console.error({
            error: error,
            mensaje: 'Error consultando cursos'
          })
        }
      );

  }


  buscarCursoPorNombre()
  {
    const busqueda$ = this._cursoRestService
      .buscar(this.busquedaCurso);
    busqueda$
      .subscribe( cursos=> {
          this.cursos = cursos;
        },
        (error) => {
          console.error(error);
        }
      )
  }
  cursosFiltrados() {
    return this.cursos
      .filter(
        (curso) => {
          return curso.nombre.toLowerCase().includes(this.nombreFiltrado.toLowerCase());
        }
      )
      .filter(
        (curso) => {
          return curso.codigo.toLowerCase().includes(this.codigoFiltrado.toLowerCase());
        }
      )
      .filter(
        (curso) => {
          return curso.descripcion.toLowerCase().includes(this.descripcionFiltrado.toLowerCase());
        }
      )

      .filter(
        (curso) => {
          return curso.materia.toLowerCase().includes(this.materiaFiltrado.toLowerCase());
        }
      )

      .filter(
        (curso) => {
          return curso.precio;
        }
      )
      ;
  }

}
