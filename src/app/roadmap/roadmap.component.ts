import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoadmapComponent implements OnInit {
  months: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.months = this.getMonths();
  }

  private getMonths() {
    const year: number = new Date().getFullYear();
    const day: number = new Date().getDate();
    const months: string[] = [];
    let month: number;
    let date: Date;
    for (let index = 0; index <= 2; index++) {
      month = new Date().getMonth() + index;
      date = new Date(year, month, day);
      const monthName = date.toLocaleString(
        'default', { month: 'long' }
      );
      months.push(monthName);
    }
    return months;
  }

}
