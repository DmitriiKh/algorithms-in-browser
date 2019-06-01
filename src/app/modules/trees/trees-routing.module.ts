import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TreesMainComponent } from './components/trees-main/trees-main.component';

const routes: Routes = [
    { path: '', component: TreesMainComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TreesRoutingModule { }
