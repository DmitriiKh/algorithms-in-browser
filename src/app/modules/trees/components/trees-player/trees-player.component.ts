import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { INode } from '../../model/node';

@Component({
  selector: 'app-trees-player',
  templateUrl: './trees-player.component.html',
  styleUrls: ['./trees-player.component.css']
})
export class TreesPlayerComponent implements OnInit, OnChanges {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  initialized = false;
  @Input() root: INode<number>;
  // Angular will not fire ngOnChanges() for changes in the array.
  // This is why we need arrayChanges
  @Input() treeChanges: number;
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
    // calculate number of levels
    const treeDepth = 35;

    // calculate node radius for proportional rendering
    const nodeRadius = this.canvas.height / ((treeDepth + 1) * 2);

    // clear canvas
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // draw a circle for each node
    this._renderNode(this.root, 0, treeDepth, nodeRadius, 0, this.canvas.width);
  }

  _renderNode(node: INode<number>, level: number, treeDepth: number, nodeRadius: number, leftBoundary: number, rightBoundary: number) {
    const x = leftBoundary + (rightBoundary - leftBoundary) / 2;
    const y = this.canvas.height - 2 * nodeRadius * (treeDepth - level + 0.5);

    this._drawCircle(x, y, nodeRadius, node.highlighted);
    this._drawText(x, y, node.value.toString(), nodeRadius);

    if (node.leftChild !== null) {
      this._renderNode(node.leftChild, level + 1, treeDepth, nodeRadius, leftBoundary, x);
    }

    if (node.rightChild !== null) {
      this._renderNode(node.rightChild, level + 1, treeDepth, nodeRadius, x, rightBoundary);
    }
  }

  _drawCircle(x: number, y: number, nodeRadius: number, highLighted: boolean) {
    this.ctx.beginPath();
    this.ctx.arc(x, y, nodeRadius, 0, 2 * Math.PI);
    this.ctx.fillStyle = highLighted ? 'yellow' : 'red';
    this.ctx.fill();
    this.ctx.closePath();
  }

  _drawText(x: number, y: number, text: string, size: number) {
    this.ctx.fillStyle = 'black';
    this.ctx.font = size.toString() + 'px Arial';
    this.ctx.fillText(text, x - size / 4, y + size / 4);
  }

  onCanvasClick() {
    this.clickEventEmitter.emit();
  }
}
