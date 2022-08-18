import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-bartime',
  templateUrl: './bartime.component.html',
  styleUrls: ['./bartime.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BartimeComponent implements OnInit{
  @Input() offset: string = '';
  @Input() width: string = '';
  @Input() haveLeftBorderSquare: boolean = false;
  @Input() haveRightBorderSquare: boolean = false;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    let div = this.element.nativeElement.childNodes[0];
    this.renderer.setStyle(div, 'margin-left', this.offset + '%');
    this.renderer.setStyle(div, 'width', this.width + '%');

    if (this.haveLeftBorderSquare) {
      this.renderer.setStyle(div, 'border-top-left-radius', '0');
      this.renderer.setStyle(div, 'border-bottom-left-radius', '0');
    }

    if (this.haveRightBorderSquare) {
      this.renderer.setStyle(div, 'border-top-right-radius', '0');
      this.renderer.setStyle(div, 'border-bottom-right-radius', '0');
    }
  }
}
