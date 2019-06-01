import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TreesRoutingModule } from './trees-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TreesMainComponent } from './components/trees-main/trees-main.component';
import { TreesPlayerComponent } from './components/trees-player/trees-player.component';

@NgModule({
  declarations: [
    TreesMainComponent,
    TreesPlayerComponent
  ],
  imports: [
    CommonModule,
    TreesRoutingModule,
    SharedModule
  ],
  providers: [],
  exports: [TreesRoutingModule]
})
export class TreesModule { }
