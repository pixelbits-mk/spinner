import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpinnerDirective } from './spinner.directive';
import { SpinnerHostDirective } from './spinner-host.directive';
import { DisableDirective } from './disable.directive';


const routes: Routes = [];

@NgModule({
   imports: [
      RouterModule.forRoot(routes)
   ],
   exports: [
      RouterModule
   ],
   declarations: [
      SpinnerDirective,
      SpinnerHostDirective,
      DisableDirective
   ]
})
export class AppRoutingModule { }
