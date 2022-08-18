import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BartimeComponent } from './bartime.component';

describe('BartimeComponent', () => {
  let component: BartimeComponent;
  let fixture: ComponentFixture<BartimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BartimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BartimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
