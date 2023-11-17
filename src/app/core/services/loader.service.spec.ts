import { TestBed } from '@angular/core/testing';

import { LoaderService } from './loader.service';

describe('LoaderService', () => {
  let service: LoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should loadingSub$ to be true', () => {
    service.show();
    expect(service.loadingSub$.getValue()).toBe(true);
  });

  it('should loadingSub$ to be false', () => {
    service.hide();
    expect(service.loadingSub$.getValue()).toBe(false);
  });
});
