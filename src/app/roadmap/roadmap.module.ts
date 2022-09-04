import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoadmapRoutingModule } from './roadmap-routing.module';
import { RoadmapComponent } from './roadmap.component';
import {
  RoadmapBodyComponent,
  RoadmapHeaderComponent,
  TaskComponent,
  TaskListComponent
} from './components';

import { SharedModule } from '../shared';

@NgModule({
  declarations: [
    RoadmapComponent,
    RoadmapHeaderComponent,
    RoadmapBodyComponent,
    TaskListComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    RoadmapRoutingModule,
    SharedModule
  ]
})
export class RoadmapModule { }
