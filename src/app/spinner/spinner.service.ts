import { Injectable, ElementRef } from "@angular/core";
import { Subject, Observable } from 'rxjs';
import { SpinnerEvent } from './spinner.model';
import { finalize } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class SpinnerService {
    events: { [key: string]: Subject<SpinnerEvent> } = {};

    constructor() {

    }
    listen(key: string): Observable<SpinnerEvent> {
        if (!this.events[key]) {
            this.events[key] = new Subject<SpinnerEvent>();
        }
        return this.events[key];
    }

    next<T>(key: string, obs: Observable<T>) {
        // const e = document.createElement('div');
        // e.classList.add('overlay');
        // document.body.appendChild(e);

        this.events[key].next(SpinnerEvent.START);
        return obs.pipe(finalize(() => {
            this.events[key].next(SpinnerEvent.STOP);
            //document.body.removeChild(e);
        })) as Observable<T>;

    }

}