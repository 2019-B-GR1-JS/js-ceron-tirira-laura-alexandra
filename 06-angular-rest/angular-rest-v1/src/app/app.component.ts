import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-rest-v1';
  url = 'http://localhost:1337';
  usuarios = [];
  //FILAS = FILAS;
  nombreFiltrado = '';
  apellidoFiltrado = '';
  correoFiltrado = '';
  passwordFiltrado = '';

  //inyeccion de dependencias
  //dependencias -> servicios
  //pueden ser usados en los componentes.
  constructor(
    private readonly _httpClient: HttpClient
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
  editar(usuario) {
    console.log('Editando usuario', usuario);
  }

  eliminar(usuario) {
    console.log('Eliminando usuario', usuario);
  }


}


