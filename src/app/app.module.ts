import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoadmapComponent } from './roadmap/roadmap.component';
import { RoadmapHeaderComponent } from './roadmap-header/roadmap-header.component';
import { RoadmapBodyComponent } from './roadmap-body/roadmap-body.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskComponent } from './task/task.component';
import { BartimeComponent } from './bartime/bartime.component';

@NgModule({
  declarations: [
    AppComponent,
    RoadmapComponent,
    RoadmapHeaderComponent,
    RoadmapBodyComponent,
    TaskListComponent,
    TaskComponent,
    BartimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
