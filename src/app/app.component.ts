import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { of, timer } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { SpinnerService } from './spinner/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'spinner';
  formGroup: FormGroup;
  constructor(private spinner: SpinnerService) {
    this.formGroup = new FormGroup({
      name1: new FormControl(''),
      name2: new FormControl(''),
      address: new FormControl('')
    });
  }
  ngOnInit() {
    this.spinner.next('containers', timer(5000)).subscribe(t => {
    });

  }
  ngAfterViewInit() {

  }
  reload() {
    this.spinner.next('containers', timer(5000)).subscribe(t => {

    });
  }
  reload2() {
    this.spinner.next('vehicles', timer(5000)).subscribe(t => {

    });
  }
}
