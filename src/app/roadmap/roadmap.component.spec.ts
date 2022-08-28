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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
