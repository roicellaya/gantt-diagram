import { Renderer2 } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BartimeComponent } from './bartime.component';

describe('BartimeComponent', () => {
  let component: BartimeComponent;
  let fixture: ComponentFixture<BartimeComponent>;
  let renderer: Renderer2;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BartimeComponent ],
      providers: [Renderer2]
    }).compileComponents();

    fixture = TestBed.createComponent(BartimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    renderer = fixture.debugElement.injector.get(Renderer2);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render margin and width correct', () => {
    spyOn(renderer, 'setStyle');
    component.offset = '10';
    component.width = '33.3';
    component.ngAfterViewInit();
    
    //TODO: shorten to one expect
    expect(renderer.setStyle).toHaveBeenCalledWith(
      component.bartimeDiv?.nativeElement,
      'margin-left',
      component.offset + '%'
    );
    expect(renderer.setStyle).toHaveBeenCalledWith(
      component.bartimeDiv?.nativeElement,
      'width',
      component.width + '%'
    );
  });

  it('should render border left radius == 0', () => {
    spyOn(renderer, 'setStyle');
    component.haveLeftBorderSquare = true;
    component.ngAfterViewInit();
    
    //TODO: shorten to one expect
    expect(renderer.setStyle).toHaveBeenCalledWith(
      component.bartimeDiv?.nativeElement,
      'border-top-left-radius',
      '0'
    );
    expect(renderer.setStyle).toHaveBeenCalledWith(
      component.bartimeDiv?.nativeElement,
      'border-bottom-left-radius',
      '0'
    );
  });

  it('should render border right radius == 0', () => {
    spyOn(renderer, 'setStyle');
    component.haveRightBorderSquare = true;
    component.ngAfterViewInit();
    
    //TODO: shorten to one expect
    expect(renderer.setStyle).toHaveBeenCalledWith(
      component.bartimeDiv?.nativeElement,
      'border-top-right-radius',
      '0'
    );
    expect(renderer.setStyle).toHaveBeenCalledWith(
      component.bartimeDiv?.nativeElement,
      'border-bottom-right-radius',
      '0'
    );
  });
});
