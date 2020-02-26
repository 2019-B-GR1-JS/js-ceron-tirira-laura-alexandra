import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RutaInicioComponent} from "./rutas/ruta-inicio/ruta-inicio.component";
import {RutaLoginComponent} from "./rutas/ruta-login/ruta-login.component";
import {RutaGestionUsuariosComponent} from "./rutas/ruta-gestion-usuarios/ruta-gestion-usuarios.component";
import {RutaGestionProfesoresComponent} from "./rutas/ruta-gestion-profesores/ruta-gestion-profesores.component";
import {RutaGestionCursosComponent} from "./rutas/ruta-gestion-cursos/ruta-gestion-cursos.component";
import {RutaGestionCabCarritoComponent} from "./rutas/ruta-gestion-cab-carrito/ruta-gestion-cab-carrito.component";
import {RutaGestionDetCarritoComponent} from "./rutas/ruta-gestion-det-carrito/ruta-gestion-det-carrito.component";
import {EstaLogeadoPolicy} from "./services/auth/politicas/esta_logeado.policy";
import {EsAdministradorPolicy} from "./services/auth/politicas/es_administrador.policy";
import {EsUsuarioPolicy} from "./services/auth/politicas/es_usuario.policy";
import {RutaGestionComprasComponent} from "./rutas/ruta-gestion-compras/ruta-gestion-compras.component";


const routes: Routes = [
  {
    path:'',
    component :RutaLoginComponent
  },
  {
    path:'login',
    component :RutaLoginComponent
  },
  {
    path:'inicio',
    component :RutaInicioComponent,
    canActivate: [EstaLogeadoPolicy]
  },

  {
    path:'inicio/gestion-usuarios',
    component :RutaGestionUsuariosComponent,
    canActivate: [EstaLogeadoPolicy]
  },
  {
    path:'inicio/gestion-profesor',
    component :RutaGestionProfesoresComponent,
    canActivate:[EstaLogeadoPolicy, EsAdministradorPolicy]

  },
  {
    path:'inicio/gestion-curso',
    component :RutaGestionCursosComponent,
    canActivate:[EstaLogeadoPolicy, EsAdministradorPolicy]
  },
  {
    path:'inicio/gestion-cab-carrito',
    component :RutaGestionCabCarritoComponent,
    canActivate:[EstaLogeadoPolicy, EsUsuarioPolicy]
  },
  {
    path:'inicio/gestion-compras',
    component :RutaGestionComprasComponent,
    canActivate:[EstaLogeadoPolicy, EsUsuarioPolicy]
  },
  {
    path:'inicio/gestion-cab-carrito/gestion-det-carrito/:idCurso',
    component :RutaGestionDetCarritoComponent,
    canActivate:[EstaLogeadoPolicy, EsUsuarioPolicy]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
