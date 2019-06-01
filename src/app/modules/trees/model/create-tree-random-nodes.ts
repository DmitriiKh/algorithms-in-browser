import { ICreateTreeAlgorithm } from './create-tree';
import { INode } from './node';

export class CreateTreeRandomNodes implements ICreateTreeAlgorithm<number> {
  description: 'Create Tree with Random Nodes';
  root: INode<number>;

  constructor() { }

  _getRandomArray(size: number) {
    return Array.from({length: size}, () => Math.floor(Math.random() * size));
  }

  createTree(size: number) {
    const array = this._getRandomArray(size);
    const leaves = new Array<INode<number>>();
    // initialize root with the first element of array
    this.root = {
      value: array[0],
      highlighted: false,
      leftChild: null,
      rightChild: null
    };
    // add root to leaves
    leaves.push(this.root);

    for (let index = 1; index < array.length; index += 1) {
      // create a new node using next element of array
      const newNode = {
        value: array[index],
        highlighted: false,
        leftChild: null,
        rightChild: null
      };
      // randomly choose a leave to add a new node
      const currentLeafIndex = Math.floor(Math.random() * leaves.length);
      const currentLeaf = leaves[currentLeafIndex];
      // randomly choose left or right child for a new node
      const child = Math.floor(Math.random() * 2);
      if (child === 0) {
        currentLeaf.leftChild = newNode;
      } else {
        currentLeaf.rightChild = newNode;
      }
      // if currentLeaf has both children remove it from leaves
      if (currentLeaf.leftChild !== null && currentLeaf.rightChild !== null) {
        leaves.splice(currentLeafIndex, 1);
      }
      // add newNode to leaves
      leaves.push(newNode);
    }
  }

  getTree() { return this.root; }
}
