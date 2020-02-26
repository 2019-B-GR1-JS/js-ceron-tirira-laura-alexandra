import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import { AuthServices } from '../authService';
import {Router} from "@angular/router";


@Injectable({
  providedIn : 'root'
})

export class EstaLogeadoPolicy implements CanActivate{
  constructor(
    private readonly _authService:AuthServices,
    private router:Router,
  ){

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean
  {
    if (!this._authService.estaLogeado) {
      console.log('No estás logueado');
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
