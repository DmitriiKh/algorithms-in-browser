import { ISortArrayAlgorithm } from './sort-array';

/**
 * This file exports class which implements Array Select Sort
 */

export class SortArraySelection implements ISortArrayAlgorithm {
  description = 'Array Selection Sort';
  array: Array<number> = [];
  currentPosition: number;

  constructor() { }

  init(array: number[]) {
    this.array = array;
    this.currentPosition = 0;
  }

  getArray() {
    return this.array;
  }

  _findMinUnsorted() {
    // find min value index in the unsorted part of array
    let minElementPosition = this.currentPosition;
    for (let index = minElementPosition + 1; index < this.array.length; index += 1) {
      if (this.array[index] < this.array[minElementPosition]) {
        // new min element index
        minElementPosition = index;
      }
    }

    return minElementPosition;
  }

  _swapElements(positionOne, positionTwo) {
    // swap elements in positionOne and positionTwo
    const temp = this.array[positionOne];
    this.array[positionOne] = this.array[positionTwo];
    this.array[positionTwo] = temp;
  }

  takeStep() {
    const newMinUnsortedPosition = this._findMinUnsorted();

    this._swapElements(newMinUnsortedPosition, this.currentPosition);

    this.currentPosition += 1;

    if (this.currentPosition === this.array.length) {
      // job's done
      return true;
    }
    // not done yet
    return false;
  }
}
