import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { lastDayOfMonth } from 'date-fns';

import { TaskComponent } from './task.component';

@Component({ selector: 'app-bartime', template: '' })
class BartimeStub {
  @Input() offset = '';
  @Input() width = '';
  @Input() haveLeftBorderSquare = false;
  @Input() haveRightBorderSquare = false;
  @Input() startDate = undefined;
  @Input() endDate = undefined;
}

describe('TaskComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TaskComponent,
        BartimeStub
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should ngOnInit', () => {
    spyOn(component, 'getBartimeOffset');
    spyOn(component, 'getBartimeWidth');
    component.ngOnInit();

    expect(component.getBartimeOffset).toHaveBeenCalled();
    expect(component.getBartimeWidth).toHaveBeenCalled();
  });

  it('should get bartime offset / passing date / startBeforeCurrentMonth == false', () => {
    const date = new Date();
    component.task = {
      id: '1',
      idProject: 'MAC-12',
      name: 'Marketing',
      start: new Date(date.getFullYear(), date.getMonth(), 7),
      end: new Date(date.getFullYear(), date.getMonth(), 30)
    };
    const offset = component.getBartimeOffset(date);
    expect(offset).toBe('29.98');
    expect(component.startBeforeCurrentMonth).toBeFalse();
  });

  it('should get bartime offset / passing date / startBeforeCurrentMonth == true', () => {
    const date = new Date();
    component.task = {
      id: '1',
      idProject: 'MAC-12',
      name: 'Marketing',
      start: new Date(date.getFullYear(), date.getMonth() - 1, 7),
      end: new Date(date.getFullYear(), date.getMonth(), 30)
    };
    const offset = component.getBartimeOffset(date);
    expect(offset).toBe('25');
    expect(component.startBeforeCurrentMonth).toBeTrue();
  });

  it('should get bartime offset / not passing date', () => {
    const date = new Date();
    component.task = {
      id: '1',
      idProject: 'MAC-12',
      name: 'Marketing',
      start: new Date(date.getFullYear(), date.getMonth(), 1),
      end: new Date(date.getFullYear(), date.getMonth(), 30)
    };
    const offset = component.getBartimeOffset();
    expect(offset).toBe('25');
    expect(component.startBeforeCurrentMonth).toBeFalse();
  });

  it('should get bartime offset / not start date', () => {
    const offset = component.getBartimeOffset();
    expect(offset).toBe('25');
    expect(component.startBeforeCurrentMonth).toBeFalse();
  });

  it('should get bartime width / start date in current month', () => {
    const date = new Date();
    component.task = {
      id: '1',
      idProject: 'MAC-12',
      name: 'Marketing',
      start: new Date(date.getFullYear(), date.getMonth(), 7),
      end: new Date(date.getFullYear(), date.getMonth(), 30)
    };
    component.bartimeOffset = '0';

    const width = component.getBartimeWidth(date);
    
    expect(parseFloat(width)).toBeCloseTo(19.9, 1);
    expect(component.endAfterLastMonth).toBeFalse();
  });

  it('should get bartime width / start date before current month', () => {
    const date = new Date();
    const lastDatePrevMonth = lastDayOfMonth(new Date(date.getFullYear(), date.getMonth() - 1, 1));
    component.task = {
      id: '1',
      idProject: 'MAC-12',
      name: 'Marketing',
      start: lastDatePrevMonth,
      end: new Date(date.getFullYear(), date.getMonth(), 7)
    };
    const width = component.getBartimeWidth(date);
    
    expect(parseFloat(width)).toBeCloseTo(6.6, 1);
    expect(component.endAfterLastMonth).toBeFalse();
  });

  it('should get bartime width / width == 80 / endAfterLastMonth == true', () => {
    const date = new Date();
    component.task = {
      id: '1',
      idProject: 'MAC-12',
      name: 'Marketing',
      start: new Date(date.getFullYear(), date.getMonth(), 1),
      end: new Date(date.getFullYear(), date.getMonth() + 3, 20)
    };
    component.bartimeOffset = '20';
    const width = component.getBartimeWidth(date);
    
    expect(width).toBe('80');
    expect(component.endAfterLastMonth).toBeTrue();
  });

  it('should get bartime width / not passing date', () => {
    const date = new Date();
    component.task = {
      id: '1',
      idProject: 'MAC-12',
      name: 'Marketing',
      start: new Date(date.getFullYear(), date.getMonth(), 7),
      end: new Date(date.getFullYear(), date.getMonth(), 30)
    };
    component.bartimeOffset = '0';

    const width = component.getBartimeWidth();
    
    expect(parseFloat(width)).toBeCloseTo(19.9, 1);
    expect(component.endAfterLastMonth).toBeFalse();
  });
});
