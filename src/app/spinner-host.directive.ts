import { Directive, ElementRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { SpinnerEvent } from './spinner.model';

@Directive({
  selector: '[appSpinnerHost]'
})
export class SpinnerHostDirective {
  events: { [key: string]: Subject<SpinnerEvent> } = {};

  constructor(private element: ElementRef) {
  }
  listen(key: string): Observable<SpinnerEvent> {
    if (!this.events[key]) {
      this.events[key] = new Subject<SpinnerEvent>();
    }
    return this.events[key];
  }

  // next<T>(key: string) {
  //   const e = document.createElement('div');
  //   e.classList.add('overlay');
  //   this.element.nativeElement.appendChild(e);

  //   this.events[key].next(SpinnerEvent.START);
  //   return this.observables[key]().pipe(finalize(() => {
  //      this.events[key].next(SpinnerEvent.STOP);
  //      this.element.nativeElement.removeChild(e);
  //   })) as Observable<T>;
  // }
  next<T>(key: string, obs: Observable<T>) {
    const e = document.createElement('div');
    e.classList.add('overlay');
    this.element.nativeElement.appendChild(e);

    this.events[key].next(SpinnerEvent.START);
    return obs.pipe(finalize(() => {
      this.events[key].next(SpinnerEvent.STOP);
      this.element.nativeElement.removeChild(e);
    })) as Observable<T>;

  }

}
