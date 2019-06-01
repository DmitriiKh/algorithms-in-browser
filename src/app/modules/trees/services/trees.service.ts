import { Injectable } from '@angular/core';

import { ITreesAlgorithm } from '../model/trees-algorithm';
import { TreesDoSomething } from '../model/trees-do-something';
import { INode } from '../model/node';

@Injectable({
  providedIn: 'root'
})
export class TreesService implements ITreesAlgorithm {
  description: string;
  TreesAlgorithms: Array<ITreesAlgorithm> = [];
  currentIndex: number;
  currentAlgorithm: ITreesAlgorithm;
  inUse = false;
  timeInUseMsec = 0;

  constructor() {
    this.TreesAlgorithms.push(new TreesDoSomething() as ITreesAlgorithm);
    this.setCurrentIndex(0);
  }

  init(root: INode<number>) {
    this.currentAlgorithm.init(root);
    this.inUse = true;
    this.timeInUseMsec = 0;
  }

  getTree() {
    return this.currentAlgorithm.getTree();
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
      this.currentAlgorithm = this.TreesAlgorithms[this.currentIndex];
      this.description = this.currentAlgorithm.description;
    }
  }

  getDescriptions() {
    const descriptions = Array<string>();
    this.TreesAlgorithms.forEach((algorithm) => descriptions.push(algorithm.description));
    return descriptions;
  }
}
