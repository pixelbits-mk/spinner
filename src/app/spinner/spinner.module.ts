import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerDirective } from './spinner.directive';
import { SpinnerHostDirective } from './spinner-host.directive';
import { DisableDirective } from './disable.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SpinnerDirective,
    SpinnerHostDirective,
    DisableDirective,
  ],
  exports: [
    SpinnerDirective,
    SpinnerHostDirective,
    DisableDirective
  ]
})
export class SpinnerModule { }
