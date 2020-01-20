//un servicio es un singleton
//solamente hay una instancia del servicio

import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn : 'root'
})

export  class UsuarioRestService
{
  //inyeccion de dependencias
  url = environment.url + '/usuario';

  constructor(
    private readonly _httpClient : HttpClient //->Servicio ->http PAR APODER HACER PETICIONE
  )
  {

  }

  editar(id: number, datos): Observable<any> {
    const urlEditar = this.url + '/' + id;
    return this._httpClient
      .put(
        urlEditar,
        datos
      );
  }

  buscar(busqueda: string): Observable<any> {
    let consulta ='';
    if (busqueda)
    {
      consulta = '?nombre=' + busqueda;
    }
    const urlBuscar = this.url + consulta;
    return this._httpClient
      .get(
        urlBuscar
      );
  }

  eliminar(id: string): Observable<any> {
   const urlEliminar = this.url + '/' + id;
    return this._httpClient
      .delete(
        urlEliminar
      );
  }


}

//estandar.
//siempre q se inyecte una dependencia
//cuando es privado siempre es con guin bajo
//y el nombre del tipo de dato.

//cuando es publico no tiene guion bajo.

//para ambis caso el nombre empieza con minuscula.
