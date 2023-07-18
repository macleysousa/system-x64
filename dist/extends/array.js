"use strict";
Array.prototype.groupBy = function (predicate) {
    var uniq = function (a, key) {
        var seen = new Set();
        return a.filter(function (item) {
            var k = key(item);
            return seen.has(k) ? false : seen.add(k);
        });
    };
    return uniq(this, predicate);
};
Array.prototype.select = function (predicate) {
    return this.map(predicate).filter(function (x) { return x; });
};
Array.prototype.sum = function (predicate) {
    var _this = this;
    return this.reduce(function (acc, item) {
        return acc + predicate(item, 0, _this);
    }, 0);
};
Array.prototype.chunk = function (perChunk) {
    var inputArray = this;
    var result = inputArray.reduce(function (resultArray, item, index) {
        var chunkIndex = Math.floor(index / perChunk);
        if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = []; // start a new chunk
        }
        resultArray[chunkIndex].push(item);
        return resultArray;
    }, []);
    return result;
};
