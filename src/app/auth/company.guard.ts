import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { ToastrService } from "src/app/services/toastr.service";

@Injectable({
  providedIn: 'root'
})
export class CompanyGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router, private toastrService: ToastrService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.authService.isLoggedIn && this.authService.userValue.type === 'company') {
      return true;
    }
    else {
      this.toastrService.showErrorToast('Access Denied!', 'Only Authenticated Companies Can Access This Page.');
      return this.router.createUrlTree(['/accessdenied']);
    }
  }
}
