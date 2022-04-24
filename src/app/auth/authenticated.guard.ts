import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";
import { ToastrService } from "../services/toastr.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedGuard implements CanActivate {

  constructor(private authService: AuthService, private toastrService: ToastrService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.authService.isLoggedIn) {
      return true;
    }
    else {
      this.toastrService.showErrorToast('Access Denied!', 'Only Authenticated Users Can Access This Page.');
      return this.router.createUrlTree(['/accessdenied']);
    }
  }
}
