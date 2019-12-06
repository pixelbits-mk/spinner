import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerDirective } from './spinner.directive';
import { DisableDirective } from './disable.directive';
import { OverlayDirective } from './overlay.directive';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    OverlayDirective,
    SpinnerDirective,
    DisableDirective,
  ],
  exports: [
    OverlayDirective,
    SpinnerDirective,
    DisableDirective
  ]
})
export class SpinnerModule { }
