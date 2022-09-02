import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadmapComponent } from './roadmap.component';

@Component({ selector: 'app-roadmap-header', template: '' })
class RoadmapHeaderStub {
  @Input() months = [];
}

@Component({ selector: 'app-roadmap-body', template: '' })
class RoadmapBodyStub { }

describe('RoadmapComponent', () => {
  let component: RoadmapComponent;
  let fixture: ComponentFixture<RoadmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        RoadmapComponent,
        RoadmapHeaderStub,
        RoadmapBodyStub
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RoadmapComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should ngOnInit', () => {
    spyOn(component, 'getMonths');
    component.ngOnInit();
    expect(component.getMonths).toHaveBeenCalled();
  });

  it('should get months / passing date', () => {
    const date = new Date(2022, 0, 1);
    const months = component.getMonths(date);
    const expectedMonths = ['enero', 'febrero', 'marzo'];
    
    expect(months).toEqual(expectedMonths);
  });

  it('should get months / not passing date', () => {
    const date = new Date();
    const firstMonth = date.toLocaleString(
      'default', { month: 'long' }
    );
    const months = component.getMonths();
    
    expect(months[0]).toBe(firstMonth);
  });
});
