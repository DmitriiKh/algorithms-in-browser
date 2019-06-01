import { INode } from './node';

export interface ITreesAlgorithm {
    init: (array: INode<number>) => void;
    getTree: () => INode<number>;
    takeStep: () => boolean;
    description: string;
}
