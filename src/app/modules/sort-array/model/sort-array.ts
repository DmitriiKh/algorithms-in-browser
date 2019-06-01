export interface ISortArrayAlgorithm {
    init: (array: Array<number>) => void;
    getArray: () => Array<number>;
    takeStep: () => boolean;
    description: string;
}
