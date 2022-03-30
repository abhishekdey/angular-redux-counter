import { Component, OnInit, VERSION } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectBookCollection } from '../app/state/books.selectors';
@Component({
  selector: 'my-app22',
  template: `<div> Child component </div> <my-ap2 [o]="2">eeee</my-ap2>`,
  styleUrls: [],
})
export class ListComponent implements OnInit {
  bookCollection$ = this.store.select(selectBookCollection);
  constructor(private store: Store) {}

  ngOnInit() {}

  ngOnChanges() {}
}
