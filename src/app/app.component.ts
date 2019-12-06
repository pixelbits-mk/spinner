import { Component, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { of, timer } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { SpinnerHostDirective } from './spinner/spinner-host.directive';

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
      name1: new FormControl(''),
      name2: new FormControl(''),
      address: new FormControl('')
    });
  }
  ngOnInit() {
    this.host.next('containers', timer(5000)).subscribe(t => {

    });
  }
  reload() {
    this.host.next('containers', timer(5000)).subscribe(t => {

    });
  }
  reload2() {
    this.host.next('vehicles', timer(5000)).subscribe(t => {

    });
  }
}
