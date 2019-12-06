import { Directive, ElementRef, Optional, OnInit, AfterViewInit, ContentChild, ViewChild } from '@angular/core';
import { SpinnerHostDirective } from './spinner-host.directive';
import { MatFormField, MatInput } from '@angular/material';
import { FormGroupDirective } from '@angular/forms';
import { SpinnerEvent } from './spinner.model';

@Directive({
  selector: '[appSpinner]'
})
export class SpinnerDirective implements OnInit, AfterViewInit {

  constructor(private host: SpinnerHostDirective, private element: ElementRef) {
    const key = this.element.nativeElement.getAttribute('appSpinner');
    host.listen(key).subscribe(t => {
      switch (t) {
        case SpinnerEvent.START:
          this.start();
          break;
        case SpinnerEvent.STOP:
          this.stop();
          break;
      }
    });
  }
  ngOnInit() {


  }
  ngAfterViewInit() {

  }

  start() {
    this.element.nativeElement.classList.add('spinner');
  }
  stop() {
    this.element.nativeElement.classList.remove('spinner');
  }

}
