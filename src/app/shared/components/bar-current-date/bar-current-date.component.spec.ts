import { ElementRef, Renderer2 } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarCurrentDateComponent } from './bar-current-date.component';

describe('BarCurrentDateComponent', () => {
  let component: BarCurrentDateComponent;
  let fixture: ComponentFixture<BarCurrentDateComponent>;
  let renderer: Renderer2;
  let element: ElementRef;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarCurrentDateComponent ],
      providers: [ Renderer2 ]
    }).compileComponents();

    fixture = TestBed.createComponent(BarCurrentDateComponent);
    component = fixture.componentInstance;
    renderer = fixture.debugElement.injector.get(Renderer2);
    element = fixture.debugElement.injector.get(ElementRef);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should ngOnInit', () => {
    spyOn(renderer, 'setStyle');
    component.offset = '45';
    component.ngOnInit();
    expect(renderer.setStyle).toHaveBeenCalledWith(
      element.nativeElement,
      'margin-left',
      component.offset + '%'
    );
  });
});
