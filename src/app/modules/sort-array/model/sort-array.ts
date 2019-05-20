export interface SortArray {
    array: Array<number>;
    init: (array: Array<number>) => void;
    getArray: () => Array<number>;
    takeStep: () => boolean;
    description: string;
}
