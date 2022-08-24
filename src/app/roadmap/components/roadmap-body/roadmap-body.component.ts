import { Component, OnInit } from '@angular/core';
import { differenceInDays } from "date-fns";

@Component({
  selector: 'app-roadmap-body',
  templateUrl: './roadmap-body.component.html',
  styleUrls: ['./roadmap-body.component.sass']
})
export class RoadmapBodyComponent implements OnInit {
  barCurrentDateOffset: string = '';

  constructor() { }

  ngOnInit(): void {
    this.barCurrentDateOffset = this.getBarCurrentDateOffset();
  }

  private getBarCurrentDateOffset(): string {
    const currentDate = new Date();
    const currentMonthInitialDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const offset: number = (differenceInDays(currentDate, currentMonthInitialDate) + 1);
    console.log(differenceInDays(currentDate, currentMonthInitialDate));
    
    return (offset * 0.83 + 25).toString();
  }

}
