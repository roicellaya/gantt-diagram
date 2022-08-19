import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BartimeComponent } from './components';

@NgModule({
  declarations: [
    BartimeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BartimeComponent
  ]
})
export class SharedModule { }
