import { ISortArrayAlgorithm } from './sort-array';

/**
 * This file exports class which implements Array Heap Sort
 *
 * Heap rules:
 * - parent has two children which indexes are
 *    (2 * parentIndex + 1) and (2 * parentIndex + 2)
 * - each element except the root (index = 0) has a parent which index
 *     is Math.floor((childIndex - 1) / 2)
 * - each parent is larger than it's children
 */

export class SortArrayHeap implements ISortArrayAlgorithm {
    description = 'Array Heap Sort';
    array: Array<number> = [];
    currentPosition: number;
  constructor() { }

  static _parentIndex(childIndex: number) {
    return Math.floor((childIndex - 1) / 2);
  }

  getArray() {
    return this.array;
  }

  init(array: Array<number>): void {
    this.array = array;
    // setting the position where we put the top element (max) of the heap
    this.currentPosition = this.array.length - 1;
  }

  _childrenIndexes(parentIndex: number) {
    let childOne = 2 * parentIndex + 1;
    let childTwo = 2 * parentIndex + 2;
    if (childOne >= this.currentPosition - 1) {
      childOne = parentIndex;
    }
    if (childTwo >= this.currentPosition - 1) {
      childTwo = parentIndex;
    }

    return [childOne, childTwo];
  }

  _swapElements(positionOne: number, positionTwo: number) {
    // swap elements in positionOne and positionTwo
    const temp = this.array[positionOne];
    this.array[positionOne] = this.array[positionTwo];
    this.array[positionTwo] = temp;
  }

  // coverting random array into heap
  _convertArrayToHeap() {
    this.array.forEach((element, elementIndex) => {
      let currentIndex = elementIndex;
      while (currentIndex !== 0) {
        // finding parent for current element
        const parentIndex = SortArrayHeap._parentIndex(currentIndex);
        // if current element is smaller or equal to it's parent
        // the heap rule is okay
        if (this.array[currentIndex] <= this.array[parentIndex]) {
          break;
        }
        // else we swapping them
        this._swapElements(currentIndex, parentIndex);
        currentIndex = parentIndex;
      }
    });
  }

  // restoring heap rules (see the top comment) after replacing the root element
  // by sinking the root element to it's new position
  _restoreHeap() {
    // starting from root
    let parentIndex = 0;
    for (;;) {
      const [childOneIndex, childTwoIndex] = this._childrenIndexes(parentIndex);

      // if current element is smaller or equal to it's parent
      // the heap rule is okay
      if (this.array[parentIndex] >= this.array[childOneIndex]
        && this.array[parentIndex] >= this.array[childTwoIndex]) {
        break;
      }

      // else swapping parent element with the largest of it's children
      let swapChildIndex: number;
      if (this.array[childOneIndex] > this.array[childTwoIndex]) {
        swapChildIndex = childOneIndex;
      } else {
        swapChildIndex = childTwoIndex;
      }
      this._swapElements(parentIndex, swapChildIndex);
      parentIndex = swapChildIndex;
    }
  }

  takeStep() {
    // convert array to heap at first step
    if (this.currentPosition === this.array.length - 1) {
      this._convertArrayToHeap();
    }

    // the root element is the largest
    // so lets move it back
    const rootPosition = 0;
    this._swapElements(rootPosition, this.currentPosition);
    // and restore heap
    this._restoreHeap();

    this.currentPosition -= 1;

    // when currentPosition is 0, sort is done
    return this.currentPosition === 0;
  }
}
