import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Offer } from 'src/core/models/offer';
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

  public getOffersByCompany(id: number): Observable<any> {
    return this.http.get<Offer[]>(`${environment.apiUrl}/companies/${id}/offers`, { withCredentials: true });
  }

  public editOffer(id:number, data: AddOfferData): Observable<any> {
    return this.http.put(`${environment.apiUrl}/offers/${id}`, data, { withCredentials: true });
  }

  public getOffer(id: number): Observable<any> {
    return this.http.get<Offer>(`${environment.apiUrl}/offers/${id}`, { withCredentials: true });
  }

  public deleteOffer(id: number): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/offers/${id}`, { withCredentials: true });
  }
}
