/**
 * Created by T897060 on 24/05/2017.
 */
import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot} from "@angular/router";
import {AuthenticationService} from "./authentication.service";


@Injectable()
export class AuthGuard implements CanActivateChild {
  constructor(private authService: AuthenticationService, private router: Router) {
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let url: string = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (this.isLoggedIn()) {
      return true;
    }

    this.router.navigate(['/login']);

    return false;
  }

  isLoggedIn(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }
}
