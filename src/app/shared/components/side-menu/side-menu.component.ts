import { Component, OnInit } from '@angular/core';
import { SortArrayService } from 'src/app/modules/sort-array/services/sort-array.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  descriptions = [];

  constructor(public sorters: SortArrayService) {}

  ngOnInit() {
    this.descriptions = this.sorters.getDescriptions();
  }

  onClick(index: number) {
    this.sorters.setCurrentIndex(index);
  }
}
