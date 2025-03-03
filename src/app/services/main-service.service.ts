import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  constructor(private http: HttpClient) { }
   apiUrl = 'http://localhost:8080/j2Dtech';

   registerUser(formData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/registerUser`, formData);
  }

  login(email: string, password: number): Observable<any> {
    const params = new HttpParams()
      .set('email', email)
      .set('password', password);

    return this.http.get(`${this.apiUrl}/login`, { params });
  }

  sendEmail(email: string): Observable<any> {
    const params = new HttpParams()
      .set('email', email);
    return this.http.get(`${this.apiUrl}/send-email`, { params });
  }

  updatePassword(email: string, password: number): Observable<any> {
    const params = new HttpParams()
      .set('email', email)
      .set('password', password);

    return this.http.get(`${this.apiUrl}/updatePassword`, { params });
  }
}
