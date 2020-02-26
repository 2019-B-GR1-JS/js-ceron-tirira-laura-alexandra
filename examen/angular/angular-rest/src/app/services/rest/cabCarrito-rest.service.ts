import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
@Injectable({
  providedIn : 'root'
})

export  class CabCarritoRestService {
  //inyeccion de dependencias
  url = environment.url + '/cabCarrito';

  constructor(
    private readonly _httpClient: HttpClient //->Servicio ->http PAR APODER HACER PETICIONE
  ) {
  }
  crear(datos): Observable<any>
  {
    const urlCrear = this.url;
    return this._httpClient
      .post(
        urlCrear,
        datos
      );
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

  buscarPorIdUsuario(idUsuario: number): Observable<any> {
    let consulta ='';
    if (idUsuario)
    {
      consulta = '?idUsuario=' + idUsuario;
    }
    const urlBuscar = this.url + consulta;
    return this._httpClient.get(urlBuscar);
  }


  eliminar(id: string): Observable<any> {
    const urlEliminar = this.url + '/' + id;
    return this._httpClient
      .delete(
        urlEliminar
      );
  }

}
