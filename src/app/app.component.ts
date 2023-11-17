import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';
import { delay } from 'rxjs';
import { LoaderService } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  isLoading: boolean = false;

  constructor(
    private loaderService: LoaderService,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.listenLoadingService();
  }

  listenLoadingService(): void {
    this.loaderService.loadingSub$
      .pipe(delay(0))
      .subscribe((loading) => {
        this.isLoading = loading;
        this.ref.markForCheck();
      });
  }
}
