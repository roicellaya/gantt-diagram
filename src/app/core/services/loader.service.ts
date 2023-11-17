import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  loadingSub$ = new BehaviorSubject<boolean>(false);

  constructor() { }

  show(): void {
    this.loadingSub$.next(true);
  }

  hide(): void {
    this.loadingSub$.next(false);
  }
}
