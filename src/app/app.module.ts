import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './state/counter.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { booksReducer } from './state/books.reducer';
import { collectionReducer } from './state/collection.reducer';
import { BookListComponent } from './book-list/book-list.component';
import { BookCollectionComponent } from './book-list/book-collection.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      count: counterReducer,
      books: booksReducer,
      collection: collectionReducer,
    }),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    MyCounterComponent,
    BookListComponent,
    BookCollectionComponent,
  ],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}
