import { ICreateTreeAlgorithm } from './create-tree';
import { INode } from './node';

export class CreateTreeRandomNodes implements ICreateTreeAlgorithm<number> {
  description: 'Create Tree with Random Nodes';
  root: INode<number>;

  constructor() { }

  createTree(arraySize: number) {
    this.root = {
      value: 5,
      highlighted: true,
      leftChild: {
        value: 3,
        highlighted: false,
        leftChild: {
          value: 1,
          highlighted: false,
          leftChild: null,
          rightChild: null
        },
        rightChild: {
          value: 4,
          highlighted: false,
          leftChild: null,
          rightChild: null
        }
      },
      rightChild: {
        value: 8,
        highlighted: false,
        leftChild: null,
        rightChild: {
          value: 12,
          highlighted: false,
          leftChild: null,
          rightChild: null
        }
      }
    };
  }

  getTree() { return this.root; }
}
