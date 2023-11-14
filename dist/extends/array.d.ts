interface Array<T> {
    groupBy<TKey>(predicate: (item: T) => TKey): GroupedItem<TKey, T>[];
    orderBy(predicate: (value: T) => unknown, direction?: 'asc' | 'desc'): T[];
    select<U>(predicate: (value: T, index: number, array: T[]) => U): U[];
    sum(predicate: (value: T, index: number, array: T[]) => number): number;
    first(predicate?: (value: T, index: number, array: T[]) => boolean, defaultValue?: T): T;
    last(predicate?: (value: T, index: number, array: T[]) => boolean, defaultValue?: T): T;
    chunk(perChunk: number): T[][];
}
interface GroupedItem<TKey, TElement> {
    key: TKey;
    values: TElement[];
}
