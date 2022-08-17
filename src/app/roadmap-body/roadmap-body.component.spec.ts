import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadmapBodyComponent } from './roadmap-body.component';

describe('RoadmapBodyComponent', () => {
  let component: RoadmapBodyComponent;
  let fixture: ComponentFixture<RoadmapBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoadmapBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoadmapBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
