import { Component, OnInit } from '@angular/core';

import { CreateArrayService } from '../../services/create-array.service';
import { SortArrayService } from '../../services/sort-array.service';

@Component({
  selector: 'app-sort-array-main',
  templateUrl: './sort-array-main.component.html',
  styleUrls: ['./sort-array-main.component.css']
})
export class SortArrayMainComponent implements OnInit {
  array: Array<number> = [];
  arrayChanges = 0;
  interval: NodeJS.Timer;
  sorted = false;
  descriptions = [];

  constructor(
    public creators: CreateArrayService,
    public sorters: SortArrayService
    ) { }

  ngOnInit() {
    this.refreshArray();
    this.descriptions = this.sorters.getDescriptions();
  }

  createArray() {
    const creator = this.creators.getCurrentAlgorithm();
    creator.createArray(500, 0, 100);
    this.array = creator.getArray();
  }

  stepForward() {
    const finished = this.sorters.takeStep();
    this.array = this.sorters.getArray();
    this.arrayChanges += 1;
    if (finished) {
      // stop algorithm
      clearInterval(this.interval);
      this.sorted = true;
    }
  }

  onPlayerClick() {
    if (this.sorted) {
      this.refreshArray();
    } else {
      if (!this.sorters.inUse) {
      this.startAlgorithm();
      }
    }
  }

  onSideMenuClick(index: number) {
    this.sorters.setCurrentIndex(index);
  }

  startAlgorithm() {
    this.sorters.init(this.array);
    this.interval = setInterval(() => { this.stepForward(); }, 25);
  }

  refreshArray() {
    this.createArray();
    this.sorted = false;
  }
}
