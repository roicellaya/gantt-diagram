import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadmapBodyComponent } from './roadmap-body.component';

@Component({ selector: 'app-task-list', template: '' })
class TaskListStub { }

@Component({ selector: 'app-bar-current-date', template: '' })
class BarCurrentDateStub {
  @Input() offset = '';
}

describe('RoadmapBodyComponent', () => {
  let component: RoadmapBodyComponent;
  let fixture: ComponentFixture<RoadmapBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        RoadmapBodyComponent,
        BarCurrentDateStub,
        TaskListStub
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RoadmapBodyComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should ngOnInit', () => {
    spyOn(component, 'getBarCurrentDateOffset');
    component.ngOnInit();
    expect(component.getBarCurrentDateOffset).toHaveBeenCalled();
  });

  it('should get bar current date offset / passing date', () => {
    const date = new Date(2022, 0, 10);
    const offset = component.getBarCurrentDateOffset(date);
    expect(offset).toBe('33.3');
  });

  it('should get bar current date offset / not passing date', () => {
    const days = new Date().getDate();
    const stubOffset = (days * 0.83 + 25).toString(); 
    const offset = component.getBarCurrentDateOffset();
    expect(offset).toBe(stubOffset);
  });
});
