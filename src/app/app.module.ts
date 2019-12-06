import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule} from '@angular/material';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { TestComponent } from './test/test.component';
import { SpinnerModule } from './spinner/spinner.module';

@NgModule({
   declarations: [
      AppComponent,
      TestComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MaterialModule,
      MatFormFieldModule,
      ReactiveFormsModule,
      SpinnerModule
   ],
   exports: [

   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
