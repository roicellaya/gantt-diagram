import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.sass']
})
export class RoadmapComponent implements OnInit {
  months: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.months = this.getMonths(new Date());
  }

  getMonths(date: Date = new Date()): string[] {
    const year: number = date.getFullYear();
    const months: string[] = [];
    let monthCount: number = 0;
    while (monthCount < 3) {
      const monthName = date.toLocaleString(
        'default', { month: 'long' }
      );
      months.push(monthName);
      date = new Date(year, date.getMonth() + 1, 1);
      monthCount += 1;
    }
    return months;
  }

}
