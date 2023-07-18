interface Array<T> {
  groupBy(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[];
  select<U>(predicate: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
  sum(predicate: (value: T, index: number, array: T[]) => number, thisArg?: any): number;
  chunk(perChunk: number, thisArg?: any): T[][];
}

Array.prototype.groupBy = function <T>(predicate: (value: any, index: number, array: any[]) => T): T[] {
  const uniq = (a: any, key: any) => {
    let seen = new Set<T>();
    return a.filter((item: any) => {
      let k = key(item);
      return seen.has(k) ? false : seen.add(k);
    });
  };

  return uniq(this, predicate);
};

Array.prototype.select = function <U>(predicate: (value: any, index: number, array: any[]) => U): U[] {
  return this.map(predicate).filter((x: U) => x);
};

Array.prototype.sum = function (predicate: (value: any, index: number, array: any[]) => number): number {
  return this.reduce((acc, item) => {
    return acc + predicate(item, 0, this);
  }, 0);
};

Array.prototype.chunk = function (perChunk: number): any[][] {
  const inputArray = this;

  const result = inputArray.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / perChunk);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; // start a new chunk
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);

  return result;
};
