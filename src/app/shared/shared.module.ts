import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BartimeComponent } from './components';
import { BarCurrentDateComponent } from './components';

@NgModule({
  declarations: [
    BartimeComponent,
    BarCurrentDateComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BarCurrentDateComponent,
    BartimeComponent
  ]
})
export class SharedModule { }
