import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SortArrayPlayerComponent } from './components/sort-array-player/sort-array-player.component';
import { SortArrayRoutingModule } from './sort-array-routing.module';
import { SideMenuComponent } from 'src/app/shared/components/side-menu/side-menu.component';
import { SortArrayMainComponent } from './components/sort-array-main/sort-array-main.component';

@NgModule({
  declarations: [
    SortArrayMainComponent,
    SortArrayPlayerComponent,
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    SortArrayRoutingModule
  ],
  providers: [],
  exports: [SortArrayRoutingModule]
})
export class SortArrayModule { }
