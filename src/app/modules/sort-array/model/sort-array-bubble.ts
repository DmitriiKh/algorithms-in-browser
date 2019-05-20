import { SortArray } from './sort-array';

/**
 * This file exports class which implements Array Bubble Sort
 */

export class SortArrayBubble implements SortArray {
  description = 'Array Bubble Sort';
  array: Array<number> = [];

  constructor() {}

  init(array: Array<number>): void {
    this.array = array;
  }

  getArray(): Array<number> {
    return this.array;
  }

  _isThereUnsortedPairs(): boolean {
    let notSorted = false;

    // check if there is unsorted pairs in array
    for (let index = 0; index < this.array.length - 1; index += 1) {
      if (this.array[index] > this.array[index + 1]) {
        // swap unsorted pair if found
        this._swapElements(index, index + 1);
        notSorted = true;
      }
    }

    return notSorted;
  }

  _swapElements(positionOne: number, positionTwo: number) {
    // swap elements in positionOne and positionTwo
    const temp = this.array[positionOne];
    this.array[positionOne] = this.array[positionTwo];
    this.array[positionTwo] = temp;
  }

  takeStep() {
    return !this._isThereUnsortedPairs();
  }
}
