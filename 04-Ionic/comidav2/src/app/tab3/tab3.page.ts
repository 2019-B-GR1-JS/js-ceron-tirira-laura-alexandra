import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  usuario={
    nombre: '',
    apellido:''
  };

  constructor() {}


  crearUsuario(formulario: NgForm)
  {
    console.log(formulario);
  }

}
