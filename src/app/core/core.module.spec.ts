import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { CoreModule } from './core.module';

describe('CoreModule', () => {
  let coreModule: CoreModule;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule],
    });

    coreModule = TestBed.inject(CoreModule);
  });

  it('should be created', () => {
    expect(coreModule).toBeTruthy();
  });
});