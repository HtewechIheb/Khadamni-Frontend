import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest, HttpStatusCode } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, switchMap, tap } from "rxjs/operators";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class UnauthorizedInterceptor implements HttpInterceptor {
  private setAuthorizationHeader(req: HttpRequest<any>, token: string): HttpRequest<any> {
    return req.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
  }

  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError(error => {
        if(error.status == HttpStatusCode.Unauthorized){
          return this.authService.refreshToken(this.authService.getToken()).pipe(
            switchMap(response => {
              return next.handle(this.setAuthorizationHeader(req, response.token));
            }),
            catchError(error => {
              this.authService.logout();
              return throwError(error);
            })
          );
        }
        return throwError(error);
      })
    )
  }
}
