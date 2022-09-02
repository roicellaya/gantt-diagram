import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roadmap-body',
  templateUrl: './roadmap-body.component.html',
  styleUrls: ['./roadmap-body.component.sass']
})
export class RoadmapBodyComponent implements OnInit {
  barCurrentDateOffset: string = '';

  constructor() { }

  ngOnInit(): void {
    this.barCurrentDateOffset = this.getBarCurrentDateOffset(new Date());
  }

  getBarCurrentDateOffset(date: Date = new Date()): string {
    const currentMonthInitialDate = new Date(date.getFullYear(), date.getMonth(), 1);
    const offset: number = date.getDate();
    
    return (offset * 0.83 + 25).toString();
  }

}
