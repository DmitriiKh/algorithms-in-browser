import { INode } from './node';

export interface ICreateTreeAlgorithm<T> {
    root: INode<T>;
    createTree: (treeSize: number) => void;
    getTree: () => INode<T>;
    description: string;
}
