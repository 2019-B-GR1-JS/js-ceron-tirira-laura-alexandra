import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {UsuarioRestService} from "../../services/rest/usuario-rest.service";
import {ModalEditarUsuarioComponent} from "../../modales/modal-editar-usuario/modal-editar-usuario.component";
import { FILAS } from 'src/app/constantes/numero-filas-por-tabla';

@Component({
  selector: 'app-ruta-gestion-usuarios',
  templateUrl: './ruta-gestion-usuarios.component.html',
  styleUrls: ['./ruta-gestion-usuarios.component.scss']
})
export class RutaGestionUsuariosComponent implements OnInit {

  title = 'angular-rest-v1';
  url = 'http://localhost:1337';
  usuarios = [];
  FILAS = FILAS;
  nombreFiltrado = '';
  apellidoFiltrado = '';
  correoFiltrado = '';
  passwordFiltrado = '';
  busquedaUsuario ='';
  //inyeccion de dependencias
  //dependencias -> servicios
  //pueden ser usados en los componentes.
  constructor(
    private readonly _httpClient: HttpClient,
    private readonly _matDialog: MatDialog,
    private readonly _usuarioRestService: UsuarioRestService
  )
  {
    //casi nunca se hacen congiguraciones.
  }
  ngOnInit(): void {
    // http://localhost:1337 + /usuario
    // CORS
    // http://localhost:4200 -> http://localhost:1337
    // http://gmail.com -> http://facebook.com
    const urlUsuarios = this.url + '/usuario';
    // $ -> Observable
    const usuarios$ = this._httpClient.get(
      urlUsuarios
    );
    usuarios$
      .subscribe(
        (usuarios: any[]) => { // TRY
          console.log('Usuarios: ', usuarios);
          this.usuarios = usuarios;
        },
        (error) => { // CATCH
          console.error({
            error: error,
            mensaje: 'Error consultando usuarios'
          })
        }
      );

  }
  guardar() {
    console.log('guardando usuario');
    const matDialogRefModalEditarUsuario = this._matDialog
      .open(
        ModalEditarUsuarioComponent,
        {width: '500px'}
      );
    const respuestaDialogo$ = matDialogRefModalEditarUsuario
      .afterClosed();

    respuestaDialogo$
      .subscribe(
        (datos) => { // try
          console.log('Datos respuesta guardar cerrar popup', datos);
          if (datos) {
            this.guardarUsuarioHTTP(datos);
          } else {
            // undefined
          }
        },
        (error) => { // catch
          console.log('Error', error);
        }
      );
  }
  guardarUsuarioHTTP(datos) {
    const usuarioGuardado$ = this._usuarioRestService
      .crear(datos);
    usuarioGuardado$
      .subscribe(
        (usuarioGuardado: any) => { // try
          console.log(usuarioGuardado);
          const indice = this.usuarios
            .findIndex(
              (usuario) => {
                return usuario.id === usuarioGuardado.id;
              }
            );
          this.usuarios.push(datos);
        },
        (error) => { // catch
          console.error(error)
        }
      )
  }

  editar(usuario) {
    console.log('Editando usuario', usuario);
    const matDialogRefModalEditarUsuario = this._matDialog
      .open(
        ModalEditarUsuarioComponent,
        {width: '500px', data: {usuario}}
      );
    const respuestaDialogo$ = matDialogRefModalEditarUsuario
      .afterClosed();

    respuestaDialogo$
      .subscribe(
        (datos) => { // try
          console.log('Datos', datos);
          if (datos) {
            this.editarUsuarioHTTP(usuario.id, datos);
          } else {
            // undefined
          }
        },
        (error) => { // catch
          console.log('Error', error);
        }
      );
  }
  editarUsuarioHTTP(id: number, datos) {
    const usuarioEditado$ = this._usuarioRestService
      .editar(id, datos);
    usuarioEditado$
      .subscribe(
        (usuarioEditado: any) => { // try
          console.log(usuarioEditado);
          const indice = this.usuarios
            .findIndex(
              (usuario) => {
                return usuario.id === id;
              }
            );
          this.usuarios[indice].nombre = datos.nombre;
          this.usuarios[indice].apellido = datos.apellido;
          this.usuarios[indice].correo = datos.correo;
          this.usuarios[indice].password = datos.password;
          this.usuarios[indice].rol = datos.rol;

        },
        (error) => { // catch
          console.error(error)
        }
      )
  }
  eliminar(usuario) {
    console.log('Eliminando usuario', usuario);

    const eliminar$ = this._usuarioRestService
      .eliminar(usuario.id);

    eliminar$
      .subscribe( usuarioEliminado=> {
          console.log(usuarioEliminado);
          //indice eliminar del frondend del arrays de usuarios
          //eliminarlo del array usuarios.
          const indice = this.usuarios
            .findIndex(
              (usuarioBuscado) => {
                return usuarioBuscado.id === usuario.id;
              }
            );
          this.usuarios.splice(indice, 1);

        },
        (error) => {
          console.error(error);
        }
      )
  }
  buscarUsuarioPorNombre()
  {
    const busqueda$ = this._usuarioRestService
      .buscar(this.busquedaUsuario);
    busqueda$
      .subscribe( usuarios=> {
          this.usuarios = usuarios;
        },
        (error) => {
          console.error(error);
        }
      )
  }

  usuariosFiltrados() {
    return this.usuarios
      .filter(
        (usuario) => {
          return usuario.nombre.toLowerCase().includes(this.nombreFiltrado.toLowerCase());
        }
      )
      .filter(
        (usuario) => {
          return usuario.apellido.toLowerCase().includes(this.apellidoFiltrado.toLowerCase());
        }
      )
      .filter(
        (usuario) => {
          return usuario.correo.toLowerCase().includes(this.correoFiltrado.toLowerCase());
        }
      )
      .filter(
        (usuario) => {
          return usuario.password.toLowerCase().includes(this.passwordFiltrado.toLowerCase());
        }
      );
  }
}
