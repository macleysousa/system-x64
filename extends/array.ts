interface Array<T> {
  groupBy<TKey>(predicate: (item: T) => TKey): GroupedItem<TKey, T>[];
  orderBy(predicate: (value: T) => unknown, direction?: 'asc' | 'desc'): T[];
  select<U>(predicate: (value: T, index: number, array: T[]) => U): U[];
  sum(predicate: (value: T, index: number, array: T[]) => number): number;
  first(predicate?: (value: T, index: number, array: T[]) => boolean, defaultValue?: T): T;
  chunk(perChunk: number): T[][];
}

interface GroupedItem<TKey, TElement> {
  key: TKey;
  values: TElement[];
}

Array.prototype.groupBy = function <T, TKey>(predicate: (value: T, index: number, array: T[]) => TKey): GroupedItem<TKey, T>[] {
  const groups: Map<string, T[]> = new Map();

  for (const item of this) {
    const key = predicate(item as T, 0, this);
    if (key === undefined) continue;
    if (JSON.stringify(key) == '{}') continue;

    const group = groups.get(JSON.stringify(key));
    if (group) {
      group.push(item);
    } else {
      groups.set(JSON.stringify(key), [item]);
    }
  }
  return Array.from(groups, ([key, values]) => ({ key: JSON.parse(key), values }))
};

Array.prototype.orderBy = function <T>(predicate: (value: T) => unknown, direction: 'asc' | 'desc' = 'asc'): T[] {
  const compare = (a: T, b: T) => {
    const aValue: any = predicate(a);
    const bValue: any = predicate(b);

    if (aValue < bValue) {
      return direction === 'asc' ? -1 : 1;
    } else if (aValue > bValue) {
      return direction === 'asc' ? 1 : -1;
    } else {
      return 0;
    }
  };

  return this.slice().sort(compare);
};

Array.prototype.select = function <U>(predicate: (value: any, index: number, array: any[]) => U): U[] {
  return this.map(predicate).filter((x: U) => x);
};

Array.prototype.sum = function (predicate: (value: any, index: number, array: any[]) => number): number {
  return this.reduce((acc, item) => {
    return Number(acc) + Number(predicate(item, 0, this));
  }, 0);
};

Array.prototype.first = function <T>(predicate?: (value: T, index: number, array: T[]) => boolean, defaultValue?: T): T {
  if (predicate) {
    const result = this.find(predicate);
    return result !== undefined ? result : defaultValue;
  } else {
    return this.length > 0 ? this[0] : defaultValue;
  }
};

Array.prototype.chunk = function (perChunk: number): any[][] {
  const result = this.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / perChunk);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; // start a new chunk
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);

  return result;
};
