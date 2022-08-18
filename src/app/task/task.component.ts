import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { compareAsc, differenceInDays, lastDayOfMonth } from "date-fns";
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
  bartimeOffset: string = '';
  bartimeWidth: string = '';
  startBeforeCurrentMonth: boolean = false;
  endAfterLastMonth: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.bartimeOffset = this.getBartimeOffset();
    this.bartimeWidth = this.getBartimeWidth();
  }

  private getBartimeOffset(): string {
    let offset: number = 0;
    const currentDate = new Date();
    const currentMonthInitialDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    offset = this.task?.start ?
             differenceInDays(this.task?.start || 0, currentMonthInitialDate) * 1.11 : 0;
    
    if (offset < 0) {
      this.startBeforeCurrentMonth = true;
    }
    return offset <= 0 ? '0' : offset.toString();
  }

  private getBartimeWidth(): string {
    let width: number = 0;
    const currentDate = new Date();
    const currentMonthInitialDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const datesCompared = compareAsc(currentMonthInitialDate, this.task?.start || 0);
    if (datesCompared <= 0) {
      width = (this.task?.start && this.task?.end) ?
              differenceInDays(this.task.end, this.task.start) * 1.11 : 0;
    } else {
      const previousMonthLastDate = lastDayOfMonth(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
      width = (this.task?.start && this.task?.end) ?
              (differenceInDays(this.task.end, this.task.start) - differenceInDays(previousMonthLastDate, this.task.start)) * 1.11 : 0;
    }

    if (parseFloat(this.bartimeOffset) + width > 100) {
      width = 100 - parseFloat(this.bartimeOffset);
      this.endAfterLastMonth = true;
    }
    return width.toString();
  }
}
