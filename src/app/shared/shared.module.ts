import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BartimeComponent } from './components';
import { BarCurrentDateComponent } from '../bar-current-date/bar-current-date.component';

@NgModule({
  declarations: [
    BartimeComponent,
    BarCurrentDateComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BartimeComponent
  ]
})
export class SharedModule { }
