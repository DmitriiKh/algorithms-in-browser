import { Injectable } from '@angular/core';

import { CreateArray } from '../model/create-array';
import { CreateArrayRandomValue } from '../model/create-array-random-value';

@Injectable({
  providedIn: 'root'
})
export class CreateArrayService {
  createArrayAlgorithms: Array<CreateArray> = [];
  currentIndex: number;

  constructor() {
    this.createArrayAlgorithms.push(new CreateArrayRandomValue() as CreateArray);
    this.currentIndex = 0;
  }

  setCurrentIndex(index: number) {
    this.currentIndex = index;
  }

  getCurrentAlgorithm() {
    return this.createArrayAlgorithms[this.currentIndex];
  }
}
