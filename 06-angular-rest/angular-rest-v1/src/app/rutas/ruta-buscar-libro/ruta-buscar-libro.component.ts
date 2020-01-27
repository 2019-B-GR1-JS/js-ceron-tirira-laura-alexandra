import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LibroRestService} from "../../services/rest/libro-rest.service";

@Component({
  selector: 'app-ruta-buscar-libro',
  templateUrl: './ruta-buscar-libro.component.html',
  styleUrls: ['./ruta-buscar-libro.component.scss']
})
export class RutaBuscarLibroComponent implements OnInit {
libros= [];
idUsuario:number;
  constructor(
    private readonly _activatedRoute:ActivatedRoute,
    private readonly _libroRestService: LibroRestService
  ) {

  }

  ngOnInit() { //esta listo el componente se ejecuta este codigo
      this.escucharParametros();
  }
  escucharParametros()
  {
    const parametrosPapa$ = this._activatedRoute.parent.params;
    parametrosPapa$
      .subscribe( (parametros : {idUsuario:string}) => {
          console.log(parametros); //idUsuario
        this.idUsuario = + parametros.idUsuario;
        this.buscarLibrosPorIdUsuario(+ parametros.idUsuario);
        }

      );
  }

buscarLibrosPorIdUsuario(idUsuario: number)
{
  const consulta = `idUsuario=${idUsuario}`;
  const  libro$ = this._libroRestService
  .buscar(consulta);

  libro$.subscribe(
    libros =>{
      console.log(libros);
      this.libros = libros;
    }, (error)=>{
      console.error(error);
    }
  );
}

}
