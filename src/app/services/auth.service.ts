import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators'
import { User } from 'src/core/models/user';
import { environment } from 'src/environments/environment';

interface RegisterCompanyData {
  email: string,
  password: string,
  name: string;
  address: string;
  description: string;
  contactNumber: string;
  category: string;
  logoFile: File
}

interface RegisterCandidateData {
  email: string,
  password: string,
  firstName: string;
  lastName: string;
  address: string;
  gender: string;
  birthdate: Date;
  resumeFile: File;
  photoFile: File
}

interface LoginData {
  email: string,
  password: string
}

interface AuthResponse {
  token: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public user: Observable<User>;

  public get isLoggedIn(): boolean {
      return !!this.currentUserSubject.value;
  }

  public get userValue(): User {
    return this.currentUserSubject.value;
  }

  constructor(private http: HttpClient, private jwtHelperService: JwtHelperService) {
    this.currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')));
    this.user = this.currentUserSubject.asObservable();
  }

  registerCompany(data: RegisterCompanyData): Observable<any> {
    const formData = new FormData();
    formData.append('email', data.email);
    formData.append('password', data.password);
    formData.append('name', data.name);
    formData.append('address', data.address);
    formData.append('description', data.description);
    if(data.contactNumber){
      formData.append('contactNumber', data.contactNumber);
    }
    if(data.category){
      formData.append('category', data.category);
    }
    if(data.logoFile){
      formData.append('logoFile', data.logoFile, data.logoFile.name);
    }

    return this.http.post<AuthResponse>(`${environment.apiUrl}/auth/registercompany`, formData, { withCredentials: true }).pipe(
      tap(response => {
        this.handleAuthResponse(response);
      })
    );
  }

  registerCandidate(data: RegisterCandidateData): Observable<any> {
    const formData = new FormData();
    formData.append('email', data.email);
    formData.append('password', data.password);
    formData.append('firstName', data.firstName);
    formData.append('lastName', data.lastName);
    formData.append('gender', data.gender);
    if(data.address){
      formData.append('address', data.address);
    }
    if(data.birthdate){
      formData.append('birthdate', data.birthdate.toUTCString());
    }
    if(data.resumeFile){
      formData.append('resumeFile', data.resumeFile, data.resumeFile.name);
    }
    if(data.photoFile){
      formData.append('photoFile', data.photoFile, data.photoFile.name);
    }

    return this.http.post<AuthResponse>(`${environment.apiUrl}/auth/registercandidate`, formData, { withCredentials: true }).pipe(
      tap(response => {
        this.handleAuthResponse(response);
      })
    );
  }

  login(data: LoginData): Observable<any> {
    return this.http.post<AuthResponse>(`${environment.apiUrl}/auth/login`, data, { withCredentials: true }).pipe(
      tap(response => {
        this.handleAuthResponse(response);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.currentUserSubject.next(null);
  }

  refreshToken(expiredToken: string): Observable<any> {
    return this.http.post<AuthResponse>(`${environment.apiUrl}/auth/refreshtoken`, { token: expiredToken }, { withCredentials: true }).pipe(
      tap(response => {
        this.handleAuthResponse(response);
      })
    );
  }

  autoLogin(): void {
    const token = this.getToken();
    if(token){
      if(this.jwtHelperService.isTokenExpired(token)){
        this.refreshToken(token);
      }
      else {
        this.currentUserSubject.next(this.getUserFromDecodedToken(this.jwtHelperService.decodeToken(token)));
      }
    }
  }

  handleAuthResponse(response: AuthResponse): void {
    this.setToken(response.token);
    this.currentUserSubject.next(this.getUserFromDecodedToken(this.jwtHelperService.decodeToken(response.token)));
  }

  getUserFromDecodedToken(decodedToken: any): User {
    console.log(decodedToken);
    return {
      id: decodedToken.id,
      email: decodedToken.email,
      type: decodedToken.type,
      info: JSON.parse(decodedToken.info)
    }
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }
}
