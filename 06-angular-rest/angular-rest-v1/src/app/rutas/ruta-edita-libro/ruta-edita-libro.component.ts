import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-ruta-edita-libro',
  templateUrl: './ruta-edita-libro.component.html',
  styleUrls: ['./ruta-edita-libro.component.scss']
})
export class RutaEditaLibroComponent implements OnInit {
parametrosEditar;
parametrosPapa;
  constructor(
    private readonly _activatedRoute:ActivatedRoute,
  ) {

  }

  ngOnInit() { //esta listo el componente se ejecuta este codigo
    //this.escucharParametrosEdicion();
    this.escucharParametrosPapa();
  }
  escucharParametrosEdicion()
  {
    const parametros$ = this._activatedRoute.params;
    parametros$
      .subscribe( (parametros) => {
        this.parametrosEditar = parametros.idLibro;
          console.log(parametros);
        }

      );
  }

  escucharParametrosPapa()
  {
    const parametros$ = this._activatedRoute.parent.params;
    parametros$
      .subscribe( (parametros) => {
        this.parametrosPapa = parametros.idUsuario;
        this.escucharParametrosEdicion();
          console.log('parametos papa',parametros);
        }

      );
  }

  cargarUsuarioYLibro()
  {
    //llamar al servidor con los parametros del papa y del hijo.
    console.log(this.parametrosPapa);
    console.log(this.parametrosEditar);
  }

}


