import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {LoginService} from '../words/services/login.service';


@Injectable()
export class LoginGuardAdd implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
    let logged = this.loginService.isLoggedIn();
    if (logged) {
      return true;
    }

    this.router.navigate(['login/add']);
    return false;
  }

}
