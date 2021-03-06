import { ICreateArrayAlgorithm } from '../model/create-array';

export class CreateArrayRandomValue implements ICreateArrayAlgorithm {
  description: 'Create Array with Random Values';
  array: Array<number>;

  constructor() { }

  createArray(arraySize: number, minValue: number, maxValue: number) {
    this.array = Array.from(Array(arraySize),
              () => Math.round(minValue + (maxValue - minValue) * Math.random()));
  }

  getArray() { return this.array; }
}
