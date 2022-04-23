import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movies, Users } from './movies.models';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movie-list.component.html',
})
export class MoviesListComponent {
  @Input() movies: ReadonlyArray<Movies> = [];
  @Output() add = new EventEmitter<string>();
}
