export interface ICreateArrayAlgorithm {
    array: Array<number>;
    createArray: (arraySize: number, minValue: number, maxValue: number) => void;
    getArray: () => Array<number>;
    description: string;
}
