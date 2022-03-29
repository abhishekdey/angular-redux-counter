import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list.component';
import { List2Component } from './list2.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ListComponent,
      },
    ]),
  ],
  declarations: [ListComponent,List2Component],
  providers: [],
})
export class ListModule {
  constructor() {
    console.log('dl2222dl');
  }
}
