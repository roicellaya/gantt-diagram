import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadmapHeaderComponent } from './roadmap-header.component';

describe('RoadmapHeaderComponent', () => {
  let component: RoadmapHeaderComponent;
  let fixture: ComponentFixture<RoadmapHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoadmapHeaderComponent ]
    }).compileComponents();

    fixture = TestBed.createComponent(RoadmapHeaderComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should ngOnInit', () => {
    component.ngOnInit();
    expect(component.firstCol).toBe('Epic');
  });
});
