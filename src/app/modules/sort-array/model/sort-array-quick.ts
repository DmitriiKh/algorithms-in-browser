import { ISortArrayAlgorithm } from './sort-array';

export class SortArrayQuick implements ISortArrayAlgorithm {
  description = 'Array Quick Sort';
  array: Array<number> = [];
  sections: Array< {
    start: number,
    end: number
  }> = [];

  constructor() { }

  static _getNewPivotIndex(
    lowEndStranger: number,
    highEndStranger: number,
    section: { start: number; end: number; }
    ): number {
    switch (true) {
      // all elements are smaller than pivot
      case lowEndStranger === null: return section.end;
      // all elements are larger or equal than pivot
      case highEndStranger === null: return section.start;
      // all elements are at right positions
      // 0 4 5 7=highEndStranger 87=lowEndStranger 24 50 15=pivot
      case lowEndStranger > highEndStranger: return lowEndStranger;
      // default case should not happen
      default: return -1; // no new pivot position
    }
  }

  init(array: Array<number>): void {
    this.array = array;
    this.sections = [{
      start: 0,
      end: this.array.length - 1,
    }];
  }

  getArray(): Array<number> {
    return this.array;
  }

  _swapElements(positionOne: number, positionTwo: number): void {
    // swap elements at positionOne and positionTwo
    const temp = this.array[positionOne];
    this.array[positionOne] = this.array[positionTwo];
    this.array[positionTwo] = temp;
  }

  _getPivot(
    section: { start: number; end: number; }
    ): { index: number; value: number; } {
    // simpliest solution
    const val = this.array[section.start];
    return {
      index: section.start,
      value: val,
    };
  }

  // find first element larger or equal to value starting from start position
  _getLowEndStranger(start: number, end: number, value: number): number {
    for (let index = start; index <= end; index += 1) {
      if (this.array[index] >= value) {
        return index;
      }
    }

    // if no such element found
    return null;
  }

  // find first element smaller than value starting from end position
  _getHighEndStranger(start: number, end: number, value: number): number {
    for (let index = end; index >= start; index -= 1) {
      if (this.array[index] < value) {
        return index;
      }
    }

    // if no such element found
    return null;
  }

  /** move elements smaller than pivot on the left of pivot
   * and elements larger or equal on the right
   * return new position for pivot
   */
  _rearrange(
    section: { start: number; end: number; },
    pivot: { index: number; value: number; }
    ): number {
    // move pivot out of the way
    this._swapElements(pivot.index, section.end);

    let lowEndStranger = this._getLowEndStranger(section.start, section.end - 1, pivot.value);
    let highEndStranger = this._getHighEndStranger(section.start, section.end - 1, pivot.value);

    // swap strangers while there is proper ones
    while (lowEndStranger != null && highEndStranger != null && highEndStranger > lowEndStranger) {
      this._swapElements(lowEndStranger, highEndStranger);
      lowEndStranger = this._getLowEndStranger(section.start, section.end - 1, pivot.value);
      highEndStranger = this._getHighEndStranger(section.start, section.end - 1, pivot.value);
    }

    // decide on new position for pivot
    const newPivotIndex = SortArrayQuick._getNewPivotIndex(
      lowEndStranger,
      highEndStranger,
      section,
    );

    // move pivot to it's new position
    this._swapElements(newPivotIndex, section.end);

    return newPivotIndex;
  }

  takeStep(): boolean {
    const newSections = [];

    this.sections.forEach((section) => {
      // choose an element that will divide array
      const pivot = this._getPivot(section);

      // move elements smaller than pivot on the left of pivot
      // and elements larger or equal on the right
      // get a new position for pivot
      const newPivotIndex = this._rearrange(section, pivot);

      // if there is at least one element between pivot and section.start
      // cteate new section
      if (newPivotIndex - section.start > 1) {
        newSections.push({
          start: section.start,
          end: newPivotIndex - 1,
        });
      }

      // if there is at least one element between pivot and section.end
      // cteate new section
      if (section.end - newPivotIndex > 1) {
        newSections.push({
          start: newPivotIndex + 1,
          end: section.end,
        });
      }
    });

    // if there is new sections to process on the next iteration
    if (newSections.length > 0) {
      this.sections = newSections;
      return false;
    }

    // array has been sorted
    return true;
  }
}
