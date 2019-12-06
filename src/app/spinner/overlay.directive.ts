import { Directive, ElementRef, Optional, OnInit, AfterViewInit } from '@angular/core';
import { SpinnerEvent } from './spinner.model';
import { SpinnerService } from './spinner.service';

@Directive({
  selector: '[appOverlay]'
})
export class OverlayDirective implements OnInit, AfterViewInit {
  overlay: HTMLElement;
  constructor(private host: SpinnerService, private element: ElementRef) {
    this.overlay = document.createElement('div');
    this.overlay.classList.add('overlay');

    const key = this.element.nativeElement.getAttribute('appOverlay').split(',');
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
    this.element.nativeElement.appendChild(this.overlay);
  }
  stop() {
    this.element.nativeElement.removeChild(this.overlay);
  }

}
