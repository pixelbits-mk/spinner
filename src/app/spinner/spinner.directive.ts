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

    if (this.element.nativeElement.tagName === 'MAT-FORM-FIELD') {
      setTimeout(() => {
        this.element.nativeElement.classList.add('mat-form-field-disabled');
      });
      console.log(this.element.nativeElement.classList);
    }
    this.element.nativeElement.classList.add('spinner');
  }
  stop() {
    if (this.element.nativeElement.tagName === 'MAT-FORM-FIELD') {
      this.element.nativeElement.classList.remove('mat-form-field-disabled');
    }
    this.element.nativeElement.classList.remove('spinner');
  }

}
