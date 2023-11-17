import { TestBed } from '@angular/core/testing';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoaderInterceptor } from './loader.interceptor';
import { LoaderService } from '../services/loader.service';
import { HttpHandler, HttpRequest } from '@angular/common/http';

class LoaderServiceMock {
  loadingSub$ = new BehaviorSubject<boolean>(false);
  show() {}
  hide() {}
}
describe('LoaderInterceptor', () => {
  let interceptor: LoaderInterceptor;
  let loaderServiceSpy: jasmine.SpyObj<LoaderService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoaderInterceptor,
        { provide: LoaderService, useClass: LoaderServiceMock }
      ]
    });

    interceptor = TestBed.inject(LoaderInterceptor);
    loaderServiceSpy = TestBed.inject(LoaderService) as jasmine.SpyObj<LoaderService>;
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  it('should show loader and then hide it', () => {
    const nextMock: HttpHandler = {
      handle: () => {
        return new Observable(subscriber => {
          subscriber.complete();
        });
      }
    };
    const requestMock = new HttpRequest('GET', '/');

    interceptor.intercept(requestMock, nextMock).subscribe(() => {
      expect(loaderServiceSpy.show).toHaveBeenCalled();
      expect(loaderServiceSpy.hide).toHaveBeenCalled();
    });
  });
});
