import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appBartime]'
})
export class BartimeDirective {
  @Input() offset: string = '';
  @Input() width: string = '';

  constructor() { }

}
