import { SortArray } from './sort-array';

/**
 * This file exports class which implements Array Insert Sort
 */

export class SortArrayInsert implements SortArray {
  description = 'Array Insert Sort';
  array: Array<number> = [];
  currentElementIndex: number;

  constructor() { }

  init(array: number[]) {
    this.array = array;
    this.currentElementIndex = 0;
  }

  getArray() {
    return this.array;
  }

  _findNewPosition(value: number) {
    // find correct position for value in the sorted part of array
    for (let index = 0; index <= this.currentElementIndex; index += 1) {
      if (this.array[index] > value) {
        // new position
        return index;
      }
    }
    // element is the largest so far
    return this.currentElementIndex;
  }

  _shiftElementsToTheRight(startPosition: number) {
    // shift all elements between start position and currentElementIndex
    for (let index = this.currentElementIndex; index > startPosition; index -= 1) {
      this.array[index] = this.array[index - 1];
    }
  }

  takeStep() {
    const value = this.array[this.currentElementIndex];
    const newPosition = this._findNewPosition(value);

    // move element to it's new position
    this._shiftElementsToTheRight(newPosition);
    this.array[newPosition] = value;

    this.currentElementIndex += 1;

    if (this.currentElementIndex === this.array.length) {
      // job's done
      return true;
    }
    // not done yet
    return false;
  }
}
