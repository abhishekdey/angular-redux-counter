import { Component, Input, OnInit, VERSION } from '@angular/core';
@Component({
  selector: 'my-ap2',
  template: `<div> Child. 2 component <ng-content></ng-content> </div>`,
  styleUrls: [],
})
export class List2Component implements OnInit {
  @Input() o;

  constructor() {
    console.log('constructor List2Component');
  }

  ngOnInit() {
    console.log('ngOnit List2Component');
  }

  ngOnChanges() {
    console.log('ngOnChanges List2Component ');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit List2Component ');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked List2Component');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy List2Component');
  }
}
