import { Injectable } from '@angular/core';

import { SortArray } from '../model/sort-array';
import { SortArrayQuick } from '../model/sort-array-quick';
import { SortArrayBubble } from '../model/sort-array-bubble';
import { SortArrayHeap } from '../model/sort-array-heap';

@Injectable({
  providedIn: 'root'
})
export class SortArrayService {
  sortArrayAlgorithms: Array<SortArray> = [];
  currentIndex: number;

  constructor() {
    this.sortArrayAlgorithms.push(new SortArrayBubble() as SortArray);
    this.sortArrayAlgorithms.push(new SortArrayHeap() as SortArray);
    this.sortArrayAlgorithms.push(new SortArrayQuick() as SortArray);
    this.currentIndex = 0;
  }

  setCurrentIndex(index: number) {
    this.currentIndex = index;
  }

  getCurrentAlgorithm() {
    return this.sortArrayAlgorithms[this.currentIndex];
  }

  getDescriptions() {
    const descriptions = Array<string>();
    this.sortArrayAlgorithms.forEach((algorithm) => descriptions.push(algorithm.description));
    return descriptions;
  }
}
