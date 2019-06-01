export interface INode<T> {
    value: T;
    highlighted: boolean;
    leftChild: INode<T>;
    rightChild: INode<T>;
}
