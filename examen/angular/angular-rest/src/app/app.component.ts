import {Component, OnInit} from '@angular/core';
import {AuthServices} from "./services/auth/authService";
import {Router} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private readonly _authService: AuthServices,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    console.log("usuario logeado: " ,this._authService.sesion);
    console.log('datos usuario loggeado: ', this._authService.sesion);
  }
salir()
{
  console.log("salir");
  this._authService.estaLogeado = false;
  this._authService.sesion = null;
  this.router.navigate(['/login']);
}
}
