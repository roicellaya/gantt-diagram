import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Task } from '../../models';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor() { }

  ngOnInit(): void {
    const task1: Task = {
      id: '1',
      idProject: 'MAC-12',
      name: 'Marketing',
      start: new Date(2022, 7, 31),
      end: new Date(2022, 8, 12)
    };
    const task2: Task = {
      id: '2',
      idProject: 'MAC-19',
      name: 'Referral',
      start: new Date(2022, 7, 3),
      end: new Date(2022, 7, 30)
    };
    const task3: Task = {
      id: '3',
      idProject: 'MAC-24',
      name: 'Blocker',
      start: new Date(2022, 8, 5),
      end: new Date(2022, 10, 30)
    };

    this.tasks.push(task1, task2, task3);
  }

  taskTrackBy(index: number, task: Task) {
    return task.id;
  }

}
