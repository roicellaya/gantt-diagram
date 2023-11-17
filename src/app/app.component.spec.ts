import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject } from 'rxjs';
import { AppComponent } from './app.component';
import { ChangeDetectorRef } from '@angular/core';
import { LoaderService } from '../app/core/services/loader.service';

class LoaderServiceMock {
  loadingSub$ = new BehaviorSubject<boolean>(false);
}


describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let loaderServiceSpy: jasmine.SpyObj<LoaderService>;
  let ref: ChangeDetectorRef;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: LoaderService, useClass: LoaderServiceMock },
        ChangeDetectorRef
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    loaderServiceSpy = TestBed.inject(LoaderService) as jasmine.SpyObj<LoaderService>;
    ref = fixture.debugElement.injector.get(ChangeDetectorRef);
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should call listenLoadingService on init', () => {
    spyOn(component, 'listenLoadingService');
    component.ngOnInit();
    expect(component.listenLoadingService).toHaveBeenCalled();
  });

  it('should get subscribed to loadingSub$', fakeAsync(() => {
    spyOn(ref.constructor.prototype, 'markForCheck');
    component.listenLoadingService();
    loaderServiceSpy.loadingSub$.next(true);
    tick();
    expect(component.isLoading).toBe(true);
    expect(ref.markForCheck).toHaveBeenCalled();
  }));
});
