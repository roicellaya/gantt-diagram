import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoadmapRoutingModule } from './roadmap-routing.module';
import { RoadmapComponent } from './roadmap.component';
import { RoadmapHeaderComponent } from './components/roadmap-header/roadmap-header.component';
import { RoadmapBodyComponent } from './components/roadmap-body/roadmap-body.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskComponent } from './components/task/task.component';
import { BartimeComponent } from './components/bartime/bartime.component';

@NgModule({
  declarations: [
    RoadmapComponent,
    RoadmapHeaderComponent,
    RoadmapBodyComponent,
    TaskListComponent,
    TaskComponent,
    BartimeComponent
  ],
  imports: [
    CommonModule,
    RoadmapRoutingModule
  ]
})
export class RoadmapModule { }
