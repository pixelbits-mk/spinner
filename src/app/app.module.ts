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
import { DisableWhileLoadingDirective } from './disable-while-loading.directive';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerDirective,
    SpinnerHostDirective,
    DisableWhileLoadingDirective
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
    DisableWhileLoadingDirective

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
