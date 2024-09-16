import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.isPrivateEndpoint(request.url)) {
      const authToken = localStorage.getItem('auth_token');
      const req = request.clone({
        setHeaders: {
          Authorization: `Bearer ${authToken}`
        }
      });
  
      return next.handle(req);
    }
    return next.handle(request);
  }

  private isPrivateEndpoint(url: string): boolean {
    return url.includes('auth/tasks') ||
      url.includes('auth/profile');
  }
}
