import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-bar-current-date',
  templateUrl: './bar-current-date.component.html',
  styleUrls: ['./bar-current-date.component.sass']
})
export class BarCurrentDateComponent implements OnInit {
  @Input() offset: string = '';
  today: number = Date.now();

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    let element = this.element.nativeElement;
    this.renderer.setStyle(element, 'margin-left', this.offset + '%');
  }

}
