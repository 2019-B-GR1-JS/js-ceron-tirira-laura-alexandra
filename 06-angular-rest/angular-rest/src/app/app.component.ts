import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-rest';
  url = 'http://localhost:1337';
  usuarios = [];
  //INYECCION DE DEPENDENCIAS
  //DEPENDENCIAS -> SERVICIOS
  constructor(
    private readonly _httpClient: HttpClient
  )
  {
    //CASI NUNCA HACER CONFIGURACIONES
  }
  ngOnInit(): void {
    const urlUsuario = this.url + '/usuario';
      const usuarios$ = this._httpClient.get(urlUsuario);
      usuarios$.subscribe((usuarios: any[]) => {
        this.usuarios = usuarios;
        console.log('usuarios: ', usuarios)
      } ,error => {
        console.log('error', error);
      });
console.log('respuesta',usuarios$);
  }

  editar(usuario)
  {
    console.log('editando usuario', usuario);
  }

  eliminar(usuario)
  {
    console.log('eliminando usuario', usuario);
  }


}
