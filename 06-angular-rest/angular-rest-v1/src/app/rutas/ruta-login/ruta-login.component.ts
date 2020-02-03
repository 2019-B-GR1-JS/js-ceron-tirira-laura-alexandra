import { Component, OnInit } from '@angular/core';
import {AuthServices} from "../../services/auth/auth.services";

@Component({
  selector: 'app-ruta-login',
  templateUrl: './ruta-login.component.html',
  styleUrls: ['./ruta-login.component.scss']
})
export class RutaLoginComponent implements OnInit {
correo ="";
password="";

  constructor(private readonly _authService:AuthServices) { }

  ngOnInit() {
  }

  login() {
    const respuestaLogin$ = this._authService.login(this.correo, this.password);

    respuestaLogin$.subscribe(
      (datos: any[]) => {
        if (datos.length > 0) {
          console.log('login exitoso');
          this._authService.estaLogeado = true;
          this._authService.sesion = datos;
        }
      },
      (error) => {
        console.log('usuario no existe');
      }
    );


  }
}
