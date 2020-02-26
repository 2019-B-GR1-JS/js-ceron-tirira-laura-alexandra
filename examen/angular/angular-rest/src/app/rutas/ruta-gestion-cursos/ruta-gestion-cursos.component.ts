import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import { FILAS } from 'src/app/constantes/numero-filas-por-tablas';
import {CursoRestService} from "../../services/rest/curso-rest.service";
import {ModalEditarCursoComponent} from "../../modales/modal-editar-curso/modal-editar-curso.component";

@Component({
  selector: 'app-ruta-gestion-cursos',
  templateUrl: './ruta-gestion-cursos.component.html',
  styleUrls: ['./ruta-gestion-cursos.component.scss']
})
export class RutaGestionCursosComponent implements OnInit {
  title = 'angular-rest';
  url = 'http://localhost:1337';
  cursos = [];
  FILAS = FILAS;
  codigoFiltrado = '';
  nombreFiltrado = '';
  descripcionFiltrado = '';
  materiaFiltrado = '';
  precioFiltrado='';
  busquedaCurso ='';

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

  guardar() {
    console.log('guardando curso');
    const matDialogRefModalEditarCurso = this._matDialog
      .open(
        ModalEditarCursoComponent,
        {width: '500px'}
      );
    const respuestaDialogo$ = matDialogRefModalEditarCurso
      .afterClosed();

    respuestaDialogo$
      .subscribe(
        (datos) => { // try
          console.log('Datos respuesta guardar cerrar popup', datos);
          if (datos) {
            this.guardarCursoHTTP(datos);
          } else {
            // undefined
          }
        },
        (error) => { // catch
          console.log('Error', error);
        }
      );
  }
  guardarCursoHTTP(datos) {
    const cursoGuardado$ = this._cursoRestService.crear(datos);
    cursoGuardado$
      .subscribe(
        (cursoGuardado: any) => { // try
          console.log(cursoGuardado);
          const indice = this.cursos
            .findIndex(
              (curso) => {
                return curso.id === cursoGuardado.id;
              }
            );
          this.cursos.push(cursoGuardado);
        },
        (error) => { // catch
          console.error('error guardar curso http',error)
        }
      )
  }

  editar(curso) {
    console.log('editando curso', curso);
    const matDialogRefModalEditarCurso = this._matDialog
      .open(
        ModalEditarCursoComponent,
        {width: '500px', data: {curso: curso}}
      );
    const respuestaDialogo$ = matDialogRefModalEditarCurso
      .afterClosed();

    respuestaDialogo$
      .subscribe(
        (datos) => {
          if (datos) {
            this.editarCursoHTTP(curso.id, datos);
          } else {
            // undefined
          }
        },
        (error) => { // catch
          console.log('Error', error);
        }
      );
  }
  editarCursoHTTP(id: number, datos) {
    const cursoEditado$ = this._cursoRestService.editar(id, datos);
    cursoEditado$
      .subscribe(
        (cursoEditado: any) => {
          console.log('curso editado: ', cursoEditado);
          const indice = this.cursos
            .findIndex(
              (curso) => {
                return curso.id === id;
              }
            );
          this.cursos[indice].codigo = datos.codigo;
          this.cursos[indice].nombre = datos.nombre;
          this.cursos[indice].descripcion = datos.descripcion;
          this.cursos[indice].materia = datos.materia;
          this.cursos[indice].precio = datos.precio;

        },
        (error) => { // catch
          console.error('error editar http:',error)
        }
      )
  }
  eliminar(curso) {
    console.log('Eliminando curso', curso);
    const eliminar$ = this._cursoRestService.eliminar(curso.id);
    eliminar$
      .subscribe( cursoEliminado=> {
          console.log(cursoEliminado);
          const indice = this.cursos
            .findIndex(
              (cursoBuscado) => {
                return cursoBuscado.id === curso.id;
              }
            );
          this.cursos.splice(indice, 1);

        },
        (error) => {
          console.error(error);
        }
      )
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
