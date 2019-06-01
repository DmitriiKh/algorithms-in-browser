import { Component, OnInit } from '@angular/core';

import { CreateTreeService } from '../../services/create-tree.service';
import { TreesService } from '../../services/trees.service';
import { INode } from '../../model/node';

@Component({
  selector: 'app-trees-main',
  templateUrl: './trees-main.component.html',
  styleUrls: ['./trees-main.component.css']
})
export class TreesMainComponent implements OnInit {
  root: INode<number>;
  treeChanges = 0;
  interval: NodeJS.Timer;
  sorted = false;
  descriptions = [];

  constructor(
    public creators: CreateTreeService,
    public treesAlgorithms: TreesService
    ) { }

  ngOnInit() {
    this.refreshTree();
    this.descriptions = this.treesAlgorithms.getDescriptions();
  }

  createTree() {
    const creator = this.creators.getCurrentAlgorithm();
    creator.createTree(500);
    this.root = creator.getTree();
  }

  stepForward() {
    const finished = this.treesAlgorithms.takeStep();
    this.root = this.treesAlgorithms.getTree();
    this.treeChanges += 1;
    if (finished) {
      // stop algorithm
      clearInterval(this.interval);
      this.sorted = true;
    }
  }

  onPlayerClick() {
    if (this.sorted) {
      this.refreshTree();
    } else {
      if (!this.treesAlgorithms.inUse) {
      this.startAlgorithm();
      }
    }
  }

  onSideMenuClick(index: number) {
    this.treesAlgorithms.setCurrentIndex(index);
  }

  startAlgorithm() {
    this.treesAlgorithms.init(this.root);
    this.interval = setInterval(() => { this.stepForward(); }, 25);
  }

  refreshTree() {
    this.createTree();
    this.sorted = false;
  }
}
