import { Directive, ElementRef, OnInit, Optional, ViewChild, ContentChild, Injector } from '@angular/core';
import { SpinnerHostDirective } from './spinner-host.directive';
import { SpinnerEvent } from './spinner.model';
import { FormControl, FormControlDirective, NgControl } from '@angular/forms';

@Directive({
  selector: '[appDisable]'
})
export class DisableDirective implements OnInit {

  constructor(private host: SpinnerHostDirective, private element: ElementRef, private injector: Injector) {
    const key = this.element.nativeElement.getAttribute('appDisable');
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

  start() {
    const ngControl = this.injector.get(NgControl, null);
    console.log(ngControl);
    if (ngControl && ngControl.control) {
      ngControl.control.disable();
    }
    this.element.nativeElement.setAttribute('disabled', true);
  }
  stop() {
    const ngControl = this.injector.get(NgControl, null);
    if (ngControl && ngControl.control) {
      ngControl.control.enable();
    }   
    this.element.nativeElement.removeAttribute('disabled');
  }


}
