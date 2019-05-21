import { Injectable } from '@angular/core';

import { SortArray } from '../model/sort-array';
import { SortArrayQuick } from '../model/sort-array-quick';
import { SortArrayBubble } from '../model/sort-array-bubble';
import { SortArrayHeap } from '../model/sort-array-heap';
import { SortArrayInsert } from '../model/sort-array-insert';

@Injectable({
  providedIn: 'root'
})
export class SortArrayService implements SortArray {
  description: string;
  sortArrayAlgorithms: Array<SortArray> = [];
  currentIndex: number;
  currentAlgorithm: SortArray;
  inUse = false;

  constructor() {
    this.sortArrayAlgorithms.push(new SortArrayBubble() as SortArray);
    this.sortArrayAlgorithms.push(new SortArrayInsert() as SortArray);
    this.sortArrayAlgorithms.push(new SortArrayHeap() as SortArray);
    this.sortArrayAlgorithms.push(new SortArrayQuick() as SortArray);
    this.setCurrentIndex(0);
  }

  init(array: number[]) {
    this.currentAlgorithm.init(array);
    this.inUse = true;
  }

  getArray() {
    return this.currentAlgorithm.getArray();
  }

  takeStep() {
    const finished = this.currentAlgorithm.takeStep();
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
