import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerDirective } from './spinner.directive';
import { DisableDirective } from './disable.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SpinnerDirective,
    DisableDirective,
  ],
  exports: [
    SpinnerDirective,
    DisableDirective
  ]
})
export class SpinnerModule { }
