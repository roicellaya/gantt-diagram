import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoaderService } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent  {
  isLoading: BehaviorSubject<boolean> = this.loaderService.loadingSub;

  constructor(
    private loaderService: LoaderService
  ) { }
}
