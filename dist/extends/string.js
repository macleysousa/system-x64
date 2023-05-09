"use strict";
String.prototype.replaceAll = function (searchValue, replaceValue) {
    var regex = new RegExp(searchValue, "g");
    return this.replace(regex, replaceValue);
};
String.prototype.replaceAll = function (searchValue, replacer) {
    var regex = new RegExp(searchValue, "g");
    return this.replace(regex, replacer);
};
