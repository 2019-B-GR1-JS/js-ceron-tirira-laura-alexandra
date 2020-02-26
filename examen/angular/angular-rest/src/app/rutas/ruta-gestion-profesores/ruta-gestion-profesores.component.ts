import { Component, OnInit } from '@angular/core';
import { FILAS } from 'src/app/constantes/numero-filas-por-tablas';
import {ProfesorRestService} from "../../services/rest/profesor-rest.service";
import {MatDialog} from "@angular/material/dialog";
import {HttpClient} from "@angular/common/http";
import {ModalEditarProfesorComponent} from "../../modales/modal-editar-profesor/modal-editar-profesor.component";



@Component({
  selector: 'app-ruta-gestion-profesores',
  templateUrl: './ruta-gestion-profesores.component.html',
  styleUrls: ['./ruta-gestion-profesores.component.scss']
})
export class RutaGestionProfesoresComponent implements OnInit {
  title = 'angular-rest-v1';
  url = 'http://localhost:1337';
  profesores = [];
  FILAS = FILAS;
  nombreFiltrado = '';
  apellidoFiltrado = '';
  cedulaFiltrado ='';
  correoFiltrado = '';
  telefonoFiltrado = '';
  busquedaProfesor ='';

  constructor(
    private readonly _httpClient: HttpClient,
    private readonly _matDialog: MatDialog,
    private readonly _profesorRestService: ProfesorRestService
  ) { }

  ngOnInit() {
    const urlProfesor = this.url + '/profesor';
    const profesores$ = this._httpClient.get(
      urlProfesor
    );
    profesores$
      .subscribe(
        (profesores: any[]) => { // TRY
          console.log('Profesores: ', profesores);
          this.profesores = profesores;
        },
        (error) => { // CATCH
          console.error({
            error: error,
            mensaje: 'Error consultando profesores'
          })
        }
      );

  }

  guardar() {
    console.log('guardando profesor');
    const matDialogRefModalEditarProfesor = this._matDialog
      .open(
        ModalEditarProfesorComponent,
        {width: '500px'}
      );
    const respuestaDialogo$ = matDialogRefModalEditarProfesor
      .afterClosed();

    respuestaDialogo$
      .subscribe(
        (datos) => { // try
          console.log('Datos respuesta guardar cerrar popup', datos);
          if (datos) {
            this.guardarProfesorHTTP(datos);
          } else {
            // undefined
          }
        },
        (error) => { // catch
          console.log('Error', error);
        }
      );
  }
  guardarProfesorHTTP(datos) {
    const profesorGuardado$ = this._profesorRestService
      .crear(datos);
    profesorGuardado$
      .subscribe(
        (profesorGuardado: any) => { // try
          console.log(profesorGuardado);
          const indice = this.profesores
            .findIndex(
              (profesor) => {
                return profesor.id === profesorGuardado.id;
              }
            );
          this.profesores.push(profesorGuardado);
        },
        (error) => { // catch
          console.error(error)
        }
      )
  }
  editar(profesor) {
    console.log('Editando profesor', profesor);
    const matDialogRefModalEditarProfesor = this._matDialog
      .open(
        ModalEditarProfesorComponent,
        {width: '500px', data: {profesor: profesor}}
      );
    const respuestaDialogo$ = matDialogRefModalEditarProfesor
      .afterClosed();

    respuestaDialogo$
      .subscribe(
        (datos) => { // try
          console.log('Datos', datos);
          if (datos) {
            console.log('id: ',profesor.id);
            this.editarProfesorHTTP(profesor.id, datos);
          } else {
            // undefined
          }
        },
        (error) => { // catch
          console.log('Error', error);
        }
      );
  }
  editarProfesorHTTP(id: number, datos) {
    const profesorEditado$ = this._profesorRestService.editar(id, datos);
    profesorEditado$
      .subscribe(
        (profesorEditado: any) => { // try
          console.log('ediProf HTTP', profesorEditado);
          const indice = this.profesores
            .findIndex(
              (profesor) => {
                return profesor.id === id;
              }
            );
          this.profesores[indice].nombre = datos.nombre;
          this.profesores[indice].apellido = datos.apellido;
          this.profesores[indice].correo = datos.correo;
          this.profesores[indice].cedula = datos.cedula;
          this.profesores[indice].telefono = datos.telefono;

        },
        (error) => { // catch
          console.error('error en el subscribe', error)
        }
      )
  }
  eliminar(profesor) {
    console.log('Eliminando profesor', profesor);

    const eliminar$ = this._profesorRestService
      .eliminar(profesor.id);

    eliminar$
      .subscribe( profesorEliminado=> {
          console.log(profesorEliminado);
          const indice = this.profesores
            .findIndex(
              (profesorBuscado) => {
                return profesorBuscado.id === profesor.id;
              }
            );
          this.profesores.splice(indice, 1);

        },
        (error) => {
          console.error(error);
        }
      )
  }
  buscarProfesorPorNombre()
  {
    const busqueda$ = this._profesorRestService
      .buscar(this.busquedaProfesor);
    busqueda$
      .subscribe( profesores=> {
          this.profesores = profesores;
        },
        (error) => {
          console.error(error);
        }
      )
  }
  profesoresFiltrados() {
    return this.profesores
      .filter(
        (profesor) => {
          return profesor.nombre.toLowerCase().includes(this.nombreFiltrado.toLowerCase());
        }
      )
      .filter(
        (profesor) => {
          return profesor.apellido.toLowerCase().includes(this.apellidoFiltrado.toLowerCase());
        }
      )
      .filter(
        (profesor) => {
          return profesor.correo.toLowerCase().includes(this.correoFiltrado.toLowerCase());
        }
      )

      .filter(
        (profesor) => {
          return profesor.cedula.toLowerCase().includes(this.cedulaFiltrado.toLowerCase());
        }
      )

      .filter(
        (profesor) => {
          return profesor.telefono.toLowerCase().includes(this.telefonoFiltrado.toLowerCase());
        }
      )
      ;
  }

}
