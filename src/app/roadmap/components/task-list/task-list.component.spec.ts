import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListComponent } from './task-list.component';
import { Task } from '../../models';
import { TaskService } from '../../services';
import { of, throwError } from 'rxjs';

@Component({ selector: 'app-task', template: '' })
class TaskStub {
  @Input() task = undefined;
  @Input() even = false;
}

describe('TaskListComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;
  let taskServiceSpy: any = jasmine.createSpyObj('TaskService', ['getTasks']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TaskListComponent,
        TaskStub
      ],
      providers: [
        { provide: TaskService, useValue: taskServiceSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should ngOnInit / return tasks list', () => {
    const responseGetTasks: Task[] = [
      {
        id: '1',
        idProject: 'MAC-12',
        name: 'Marketing',
        start: new Date(2022, 8, 1),
        end: new Date(2022, 8, 30)
      },
      {
        id: '2',
        idProject: 'MAC-19',
        name: 'Referral',
        start: new Date(2022, 8, 15),
        end: new Date(2022, 8, 24)
      },
      {
        id: '3',
        idProject: 'MAC-24',
        name: 'Blocker',
        start: new Date(2022, 8, 5),
        end: new Date(2022, 10, 30)
      }
    ];
    const responseMock = {
      description: 'OK',
      data: responseGetTasks
    };
    taskServiceSpy.getTasks.and.returnValue(of(responseMock));
    component.ngOnInit();
    expect(component.tasks).toEqual(responseGetTasks);
  });

  it('should ngOnInit / return error', () => {
    const responseMock = {
      description: 'ERROR',
      data: []
    }

    spyOn(console, 'error');
    taskServiceSpy.getTasks.and.returnValue(throwError(() => responseMock));
    component.ngOnInit();
    expect(console.error).toHaveBeenCalledWith(responseMock);
  });

  it('should track by right', () => {
    const stubTask = {
      id: '1',
      idProject: 'MAC-12',
      name: 'Marketing',
      start: new Date(2022, 7, 1),
      end: new Date(2022, 7, 30)
    };

    const id = component.taskTrackBy(0, stubTask);
    expect(id).toBe('1');
  });
});
