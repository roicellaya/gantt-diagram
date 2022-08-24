import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarCurrentDateComponent } from './bar-current-date.component';

describe('BarCurrentDateComponent', () => {
  let component: BarCurrentDateComponent;
  let fixture: ComponentFixture<BarCurrentDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarCurrentDateComponent ]
    }).compileComponents();

    fixture = TestBed.createComponent(BarCurrentDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
