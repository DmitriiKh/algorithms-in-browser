import { Component, OnInit } from '@angular/core';

import { CreateArrayService } from '../../services/create-array.service';
import { SortArrayService } from '../../services/sort-array.service';

@Component({
  selector: 'app-sort-array-player',
  templateUrl: './sort-array-player.component.html',
  styleUrls: ['./sort-array-player.component.css']
})
export class SortArrayPlayerComponent implements OnInit {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  array: Array<number> = [];
  interval: NodeJS.Timer;
  sorted = false;
  inProcess = false;
  sorterDescription = '';

  constructor(
    private creators: CreateArrayService,
    private sorters: SortArrayService
    ) {
   }

  ngOnInit() {
    this.canvas = document.getElementById('player-canvas') as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d');

    this.refresh();
  }

  createArray() {
    const creator = this.creators.getCurrentAlgorithm();
    creator.createArray(500, 0, 100);
    this.array = creator.getArray();
  }

  render() {
    this.sorterDescription = this.sorters.getCurrentAlgorithm().description;

    // calculate scale for proportional rendering
    const scale = {
      x: this.canvas.width / this.array.length,
      y: this.canvas.height / Math.max(...this.array),
    };

    // clear canvas
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // draw a rectangle for each array value
    this.array.forEach((value, index) => {
      this.ctx.beginPath();
      this.ctx.rect(index * scale.x, this.canvas.height, scale.x, -value * scale.y);
      this.ctx.fillStyle = 'red';
      this.ctx.fill();
      this.ctx.closePath();
    });
  }

  stepForward() {
    const sorter = this.sorters.getCurrentAlgorithm();
    const finished = sorter.takeStep();
    this.array = sorter.getArray();
    if (finished) {
      clearInterval(this.interval);
      this.sorted = true;
      this.inProcess = false;
    }
    this.render();
  }

  onCanvasClick() {
    if (this.sorted) {
      this.refresh();
    } else {
      if (!this.inProcess) {
      this.startAlgorithm();
      }
    }
  }

  startAlgorithm() {
    this.inProcess = true;
    const currentAlgorithm = this.sorters.getCurrentAlgorithm();
    currentAlgorithm.init(this.array);
    this.interval = setInterval(() => { this.stepForward(); }, 25);
  }

  refresh() {
    this.createArray();
    this.render();
    this.sorted = false;
    this.inProcess = false;
  }
}
