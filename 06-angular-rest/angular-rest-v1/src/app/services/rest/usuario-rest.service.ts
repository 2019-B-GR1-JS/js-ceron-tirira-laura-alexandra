//un servicio es un singleton
//solamente hay una instancia del servicio

import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn : 'root'
})

export  class UsuarioRestService
{
  //inyeccion de dependencias
  constructor(
    private readonly _httpClient : HttpClient //->Servicio ->http PAR APODER HACER PETICIONE
  )
  {

  }

}

//estandar.
//siempre q se inyecte una dependencia
//cuando es privado siempre es con guin bajo
//y el nombre del tipo de dato.

//cuando es publico no tiene guion bajo.

//para ambis caso el nombre empieza con minuscula.
