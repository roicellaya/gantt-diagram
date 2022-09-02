import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-bartime',
  templateUrl: './bartime.component.html',
  styleUrls: ['./bartime.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BartimeComponent implements OnInit, AfterViewInit {
  @Input() offset: string = '';
  @Input() width: string = '';
  @Input() haveLeftBorderSquare: boolean = false;
  @Input() haveRightBorderSquare: boolean = false;
  @Input() startDate?: Date;
  @Input() endDate?: Date;
  @ViewChild('bartimeDiv') bartimeDiv?: ElementRef;

  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.renderer.setStyle(this.bartimeDiv?.nativeElement, 'margin-left', this.offset + '%');
    this.renderer.setStyle(this.bartimeDiv?.nativeElement, 'width', this.width + '%');

    if (this.haveLeftBorderSquare) {
      this.renderer.setStyle(this.bartimeDiv?.nativeElement, 'border-top-left-radius', '0');
      this.renderer.setStyle(this.bartimeDiv?.nativeElement, 'border-bottom-left-radius', '0');
    }

    if (this.haveRightBorderSquare) {
      this.renderer.setStyle(this.bartimeDiv?.nativeElement, 'border-top-right-radius', '0');
      this.renderer.setStyle(this.bartimeDiv?.nativeElement, 'border-bottom-right-radius', '0');
    }
  }
}
