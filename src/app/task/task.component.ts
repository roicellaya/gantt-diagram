import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskComponent implements OnInit {
  @Input() task?: Task;
  @Input() even: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
