import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
        component: ListComponent,
      },
    ]),
  ],
  declarations: [ListComponent],
  providers: [],
})
export class ListModule {
  constructor() {
    console.log('dldl');
  }
}
