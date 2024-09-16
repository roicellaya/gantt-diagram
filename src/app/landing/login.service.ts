import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { LoginResponse } from '../roadmap/models/loginResponse.model';
import { LoginRequest } from '../roadmap/models/loginRequest.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  login(req: LoginRequest): Observable<LoginResponse> {
    const url = `${environment.apiHost}:${environment.apiPort}/api/v1/auth/login`;
    const headers = new HttpHeaders({
      'Content-Type':  'application/json'
    });
    return this.http.post<LoginResponse>(url, req, { headers }).pipe(
      tap((res: LoginResponse) => {
        this.setSession(res);
      }),
      shareReplay()
    );
  }

  logout(): void {
    localStorage.removeItem('auth_token');
  }

  private setSession(authRes: LoginResponse): void {
    localStorage.setItem('auth_token', authRes.access_token)
  }
}
