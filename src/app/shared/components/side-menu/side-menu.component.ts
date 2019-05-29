import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {
  @Input() descriptions = [];
  @Output() clickEventEmitter = new EventEmitter<number>();

  constructor() {}

  onClick(index: number) {
    this.clickEventEmitter.emit(index);
  }
}
