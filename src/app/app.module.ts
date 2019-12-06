import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule} from '@angular/material';
import { MaterialModule } from './material/material.module';
import { SpinnerDirective } from './spinner.directive';
import { SpinnerHostDirective } from './spinner-host.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { DisableDirective } from './disable.directive';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerDirective,
    SpinnerHostDirective,
    DisableDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    SpinnerDirective,
    SpinnerHostDirective,
    DisableDirective

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
