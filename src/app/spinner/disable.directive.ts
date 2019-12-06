import { Directive, ElementRef, OnInit } from '@angular/core';
import { SpinnerHostDirective } from './spinner-host.directive';
import { SpinnerEvent } from './spinner.model';

@Directive({
  selector: '[appDisable]'
})
export class DisableDirective implements OnInit {
  constructor(private host: SpinnerHostDirective, private element: ElementRef) {
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
    this.element.nativeElement.setAttribute('disabled', true);
  }
  stop() {
    this.element.nativeElement.removeAttribute('disabled');
  }


}
