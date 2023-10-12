"use strict";
Array.prototype.groupBy = function (predicate) {
    var groups = new Map();
    for (var _i = 0, _a = this; _i < _a.length; _i++) {
        var item = _a[_i];
        var key = predicate(item, 0, this);
        if (key === undefined)
            continue;
        if (JSON.stringify(key) == '{}')
            continue;
        var group = groups.get(JSON.stringify(key));
        if (group) {
            group.push(item);
        }
        else {
            groups.set(JSON.stringify(key), [item]);
        }
    }
    return Array.from(groups, function (_a) {
        var key = _a[0], values = _a[1];
        return ({ key: JSON.parse(key), values: values });
    });
};
Array.prototype.orderBy = function (predicate, direction) {
    if (direction === void 0) { direction = 'asc'; }
    var compare = function (a, b) {
        var aValue = predicate(a);
        var bValue = predicate(b);
        if (aValue < bValue) {
            return direction === 'asc' ? -1 : 1;
        }
        else if (aValue > bValue) {
            return direction === 'asc' ? 1 : -1;
        }
        else {
            return 0;
        }
    };
    return this.slice().sort(compare);
};
Array.prototype.select = function (predicate) {
    return this.map(predicate).filter(function (x) { return x; });
};
Array.prototype.sum = function (predicate) {
    var _this = this;
    return this.reduce(function (acc, item) {
        return Number(acc) + Number(predicate(item, 0, _this));
    }, 0);
};
Array.prototype.first = function (predicate, defaultValue) {
    if (predicate) {
        var result = this.find(predicate);
        return result !== undefined ? result : defaultValue;
    }
    else {
        return this.length > 0 ? this[0] : defaultValue;
    }
};
Array.prototype.chunk = function (perChunk) {
    var result = this.reduce(function (resultArray, item, index) {
        var chunkIndex = Math.floor(index / perChunk);
        if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = []; // start a new chunk
        }
        resultArray[chunkIndex].push(item);
        return resultArray;
    }, []);
    return result;
};
