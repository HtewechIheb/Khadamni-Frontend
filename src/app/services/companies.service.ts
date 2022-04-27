import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor(private http: HttpClient) {}

  public getCompany(id: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/companies/${id}`, { withCredentials: true });
  }
}
