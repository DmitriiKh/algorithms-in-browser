import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SortArrayMainComponent } from './components/sort-array-main/sort-array-main.component';

const routes: Routes = [
    { path: '', component: SortArrayMainComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SortArrayRoutingModule { }
