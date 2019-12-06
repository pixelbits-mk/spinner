import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpinnerModule } from './spinner/spinner.module';



const routes: Routes = [];

@NgModule({
   imports: [
      RouterModule.forRoot(routes),
      SpinnerModule
   ],
   exports: [
      RouterModule,
      SpinnerModule
   ],
   declarations: [
   ]
})
export class AppRoutingModule { }
