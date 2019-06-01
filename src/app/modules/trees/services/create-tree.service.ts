import { Injectable } from '@angular/core';

import { CreateTreeRandomNodes } from '../model/create-tree-random-nodes';
import { ICreateTreeAlgorithm } from '../model/create-tree';

@Injectable({
  providedIn: 'root'
})
export class CreateTreeService {
  createTreeAlgorithms: Array<ICreateTreeAlgorithm<number>> = [];
  currentIndex: number;

  constructor() {
    this.createTreeAlgorithms.push(new CreateTreeRandomNodes() as ICreateTreeAlgorithm<number>);
    this.currentIndex = 0;
  }

  setCurrentIndex(index: number) {
    this.currentIndex = index;
  }

  getCurrentAlgorithm() {
    return this.createTreeAlgorithms[this.currentIndex];
  }
}
