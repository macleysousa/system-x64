interface Array<T> {
    groupBy(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[];
    select<U>(predicate: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
    sum(predicate: (value: T, index: number, array: T[]) => number, thisArg?: any): number;
    chunk(perChunk: number, thisArg?: any): T[][];
}
