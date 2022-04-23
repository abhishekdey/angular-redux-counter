import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movies, Users } from './movies.models';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent {
  @Input() books: ReadonlyArray<Movies> = [];
  @Output() add = new EventEmitter<string>();
}
