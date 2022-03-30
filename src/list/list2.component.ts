import { Component, Input, OnInit, VERSION } from '@angular/core';
@Component({
  selector: 'my-ap2',
  template: `<div> Child. 2 component <ng-content></ng-content> </div>`,
  styleUrls: [],
})
export class List2Component implements OnInit {
  @Input() o;

  constructor() {}

  ngOnInit() {}

  ngOnChanges() {}

  ngAfterContentInit() {}

  ngAfterContentChecked() {}

  ngOnDestroy() {}
}
