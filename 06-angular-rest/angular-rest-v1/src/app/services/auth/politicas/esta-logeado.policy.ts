import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {AuthServices} from "../auth.services";

@Injectable({
  providedIn : 'root'
})

export class EstaLogeadoPolicy implements CanActivate{
constructor(private readonly _authService:AuthServices){

}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {
  if(this._authService.sesion.rol ==='Administrador')
  {
    return true;
  }
  else {
    return false;
  }
    return this._authService.estaLogeado;
  }
}
