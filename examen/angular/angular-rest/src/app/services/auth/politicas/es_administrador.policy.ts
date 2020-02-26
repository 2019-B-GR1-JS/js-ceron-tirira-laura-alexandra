import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import { AuthServices } from '../authService';


@Injectable({
  providedIn : 'root'
})

export class EsAdministradorPolicy implements CanActivate{
  constructor(
    private readonly _authService:AuthServices
  ){

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean
  {
    if(this._authService.sesion.rol.toLowerCase() ==='administrador')
    {
      return true;
    }
    else {
      return false;
    }

  }
}
