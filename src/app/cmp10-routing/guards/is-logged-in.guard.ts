import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from 'src/app/cmp07-servicios/servicios/token.service';

@Injectable({
  providedIn: 'root',
})
export class IsLoggedInGuard implements CanActivate {
  router: any;
  constructor(private tokenService: TokenService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const token = this.tokenService.getToken();

    return token ? true : this.router.createUrlTree(['/nuevo-usuario']); //true cambia la url, false no se mueve
  }
}
// UrlTree es para hacer redirecciones (ej. si no estoy logeado en vez de devolver 'false' y redirecciona al cmp de login)
