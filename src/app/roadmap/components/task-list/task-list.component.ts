import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { GeneralResponse, Task } from '../../models';
import { TaskService } from '../../services';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(
    private taskService: TaskService,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    const taskObserver = {
      next: (response: GeneralResponse) => {
        response.data.map((value: any) => {
          let task: Task = { ...value };
          task.start = new Date(value.start);
          task.end = new Date(value.end);
          this.tasks.push(task);
        });
      },
      error: (error: HttpErrorResponse) => {
        //TODO: handle error
        console.error(error);
      },
      complete: () => this.ref.markForCheck()
    };
    this.taskService.getTasks().subscribe(taskObserver);
  }

  taskTrackBy(index: number, task: Task): string {
    return task.id;
  }

}
