import { ITreesAlgorithm } from './trees-algorithm';
import { INode } from './node';

/**
 * This file exports class which implements Array Bubble Sort
 */

export class TreesDoSomething implements ITreesAlgorithm {
  description = 'Trees Do Something';
  root: INode<number>;

  constructor() {}

  init(tree: INode<number>): void {
    this.root = tree;
  }

  getTree(): INode<number> {
    return this.root;
  }

  takeStep() {
    // done!
    return true;
  }
}
