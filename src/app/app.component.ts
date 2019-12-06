import { Component, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SpinnerHostDirective } from './spinner-host.directive';
import { of, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild(SpinnerHostDirective, { static: true})
  host: SpinnerHostDirective;

  title = 'spinner';
  formGroup: FormGroup;
  constructor() {
    this.formGroup = new FormGroup({
      name: new FormControl('')
    });
  }
  ngOnInit() {

    this.host.register('containers', () => timer(5000));
    this.host.next('containers').subscribe(t => {

    });
  }
  reload() {
    this.host.next('containers').subscribe(t => {
      
    });
  }

}
