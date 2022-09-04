import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GeneralResponse } from '../models';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private http: HttpClient
  ) { }

  getTasks(): Observable<GeneralResponse> {
    return this.http.get<GeneralResponse>('http://localhost:1500/api/v1/tasks');
  }
}
