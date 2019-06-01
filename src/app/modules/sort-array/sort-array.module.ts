import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { SortArrayRoutingModule } from './sort-array-routing.module';
import { SortArrayPlayerComponent } from './components/sort-array-player/sort-array-player.component';
import { SortArrayMainComponent } from './components/sort-array-main/sort-array-main.component';

@NgModule({
  declarations: [
    SortArrayMainComponent,
    SortArrayPlayerComponent
  ],
  imports: [
    CommonModule,
    SortArrayRoutingModule,
    SharedModule
  ],
  providers: [],
  exports: [SortArrayRoutingModule]
})
export class SortArrayModule { }
