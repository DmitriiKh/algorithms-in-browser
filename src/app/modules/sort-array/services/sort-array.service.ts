import { Injectable } from '@angular/core';

import { ISortArrayAlgorithm } from '../model/sort-array';
import { SortArrayQuick } from '../model/sort-array-quick';
import { SortArrayBubble } from '../model/sort-array-bubble';
import { SortArrayHeap } from '../model/sort-array-heap';
import { SortArrayInsert } from '../model/sort-array-insert';
import { SortArraySelection } from '../model/sort-array-selection';

@Injectable({
  providedIn: 'root'
})
export class SortArrayService implements ISortArrayAlgorithm {
  description: string;
  sortArrayAlgorithms: Array<ISortArrayAlgorithm> = [];
  currentIndex: number;
  currentAlgorithm: ISortArrayAlgorithm;
  inUse = false;
  timeInUseMsec = 0;

  constructor() {
    this.sortArrayAlgorithms.push(new SortArrayBubble() as ISortArrayAlgorithm);
    this.sortArrayAlgorithms.push(new SortArrayInsert() as ISortArrayAlgorithm);
    this.sortArrayAlgorithms.push(new SortArraySelection() as ISortArrayAlgorithm);
    this.sortArrayAlgorithms.push(new SortArrayHeap() as ISortArrayAlgorithm);
    this.sortArrayAlgorithms.push(new SortArrayQuick() as ISortArrayAlgorithm);
    this.setCurrentIndex(0);
  }

  init(array: number[]) {
    this.currentAlgorithm.init(array);
    this.inUse = true;
    this.timeInUseMsec = 0;
  }

  getArray() {
    return this.currentAlgorithm.getArray();
  }

  takeStep() {
    const startTime = performance.now();
    const finished = this.currentAlgorithm.takeStep();
    const endTime = performance.now();

    // uddate time spent by algorithm
    this.timeInUseMsec += endTime - startTime;

    if (finished) {
      this.inUse = false;
    }
    return finished;
  }

  setCurrentIndex(index: number) {
    if (!this.inUse) {
      this.currentIndex = index;
      this.currentAlgorithm = this.sortArrayAlgorithms[this.currentIndex];
      this.description = this.currentAlgorithm.description;
    }
  }

  getDescriptions() {
    const descriptions = Array<string>();
    this.sortArrayAlgorithms.forEach((algorithm) => descriptions.push(algorithm.description));
    return descriptions;
  }
}
