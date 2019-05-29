import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-sort-array-player',
  templateUrl: './sort-array-player.component.html',
  styleUrls: ['./sort-array-player.component.css']
})
export class SortArrayPlayerComponent implements OnInit, OnChanges {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  initialized = false;
  @Input() array: Array<number>;
  // Angular will not fire ngOnChanges() for changes in the array.
  // This is why we need arrayChanges
  @Input() arrayChanges: number;
  @Output() clickEventEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.canvas = document.getElementById('player-canvas') as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d');

    // allow rendering on changes
    this.initialized = true;
    this.render();
  }

  ngOnChanges() {
    if (this.initialized) {
      this.render();
    }
  }

  render() {
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

  onCanvasClick() {
    this.clickEventEmitter.emit();
  }
}
