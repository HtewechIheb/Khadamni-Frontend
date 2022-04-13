import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators'
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
  token: string,
  refreshToken: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  registerCompany(data: RegisterCompanyData): Observable<void> {
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

    return this.http.post<AuthResponse>(`${environment.apiUrl}/auth/registercompany`, formData).pipe(
      map(response => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('refreshToken', response.refreshToken);
        console.log(response);
      })
    );
  }

  registerCandidate(data: RegisterCandidateData): Observable<void> {
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

    return this.http.post<AuthResponse>(`${environment.apiUrl}/auth/registercandidate`, formData).pipe(
      map(response => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('refreshToken', response.refreshToken);
        console.log(response);
      })
    );
  }

  login(data: LoginData): Observable<void> {
    return this.http.post<AuthResponse>(`${environment.apiUrl}/auth/login`, data).pipe(
      map(response => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('refreshToken', response.refreshToken);
        console.log(response);
      })
    );
  }
}
