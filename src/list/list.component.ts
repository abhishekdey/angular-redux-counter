import { Component, OnInit, VERSION } from '@angular/core';
@Component({
  selector: 'my-app22',
  template: '<div> Child component </div> <my-ap2></my-ap2>',
  styleUrls: [],
})
export class ListComponent implements OnInit {
  constructor() {
    console.log('constructor ListComponent');
  }

  ngOnInit() {
    console.log('ngOnit ListComponent');
  }
}
