import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GeneralResponse } from '../models';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private http: HttpClient
  ) { }

  getTasks(): Observable<GeneralResponse> {
    const url = `${environment.apiHost}:${environment.apiPort}/api/v1/auth/tasks`;
    return this.http.get<GeneralResponse>(url);
  }
}
