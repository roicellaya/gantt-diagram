import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-roadmap-header',
  templateUrl: './roadmap-header.component.html',
  styleUrls: ['./roadmap-header.component.sass']
})
export class RoadmapHeaderComponent implements OnInit {
  @Input() months: string[] = [];
  firstCol: string = '';

  constructor() { }

  ngOnInit(): void {
    this.firstCol = 'Epic';
  }
}
