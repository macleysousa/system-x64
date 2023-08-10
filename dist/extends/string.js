"use strict";
String.prototype.replaceAll = function (searchValue, replaceValue) {
    if (typeof replaceValue === 'string') {
        return this.split(searchValue).join(replaceValue);
    }
    else if (typeof replaceValue === 'function') {
        var parts = this.split(searchValue);
        for (var i = 1; i < parts.length; i += 2) {
            parts[i] = replaceValue(parts[i - 1] + searchValue + parts[i]);
        }
        return parts.join('');
    }
    return this;
};
