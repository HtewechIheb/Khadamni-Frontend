import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

interface AddOfferData {
  title: string,
  industry: string,
  type: string,
  description: string,
  gender: string,
  minimumExperience: number,
  recommendedExperience: number,
  spots: number,
  salary: number,
  degree: string,
  skills: string[]
}

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  constructor(private http: HttpClient) { }

  public addOffer(data: AddOfferData): Observable<any> {
    return this.http.post(`${environment.apiUrl}/offers/`, data, { withCredentials: true });
  }
}
