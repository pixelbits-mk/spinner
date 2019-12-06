import { Directive, ElementRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { SpinnerEvent } from './spinner.model';

@Directive({
  selector: '[appSpinnerHost]'
})
export class SpinnerHostDirective {
  events: { [key: string]: Subject<SpinnerEvent> } = {};
  observables: { [key: string]: () => Observable<any> } = {};

  constructor(private element: ElementRef) {
  }
  listen(key: string): Observable<SpinnerEvent> {
    if (!this.events[key]) {
      this.events[key] = new Subject<SpinnerEvent>();
    }
    return this.events[key];
  }
  register(key: string, trigger: () => Observable<any>) {
    if (!this.events[key]) {
      this.events[key] = new Subject<SpinnerEvent>();
    }
    this.observables[key] = trigger;
  }
  next<T>(key: string) {
    const e = document.createElement('div');
    e.classList.add('overlay');
    this.element.nativeElement.appendChild(e);

    this.events[key].next(SpinnerEvent.START);
    return this.observables[key]().pipe(finalize(() => {
       this.events[key].next(SpinnerEvent.STOP);
       this.element.nativeElement.removeChild(e);
    })) as Observable<T>;
  }

}
