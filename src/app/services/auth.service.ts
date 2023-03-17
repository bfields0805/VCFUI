import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { environment } from 'src/environments/environment.development';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authUrl: string = `${environment.baseUrl}/auth`;
  loggedIn: boolean = false;
  currUser?: User | null;

  constructor(private http: HttpClient) {

  }
  login(email: string, password: string): Observable<any> {
    const payload = { email, password };

    return this.http.post<any>(`${this.authUrl}/login`, payload, {
      headers: environment.headers,
    }).pipe(tap(response => {
      if (response) {
        this.currUser = new User();
      }
    }));
  }

  register(userName: string, email: string, pass: string): Observable<any> {
    const payload = { userName, email, pass };

    return this.http.post<any>(`${this.authUrl}`, payload, { headers: environment.headers }).pipe(
      tap(response => {
        if (response) {
          this.currUser = new User();
        }
      })
    )
  }

}
