import { Component, OnInit, VERSION } from '@angular/core';
@Component({
  selector: 'my-ap2',
  template: '<div> Child2 component </div>',
  styleUrls: [],
})
export class List2Component implements OnInit {
  constructor() {
    console.log('constructor List2Component');
  }

  ngOnInit() {
    console.log('ngOnit List2Component');
  }
}
