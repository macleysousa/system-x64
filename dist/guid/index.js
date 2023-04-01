"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guid = void 0;
var Guid = /** @class */ (function () {
    function Guid(value) {
        if (!Guid.isValid(value)) {
            throw new Error("'".concat(value, "' is not a valid Guid."));
        }
        this.value = value;
    }
    Guid.isValid = function (value) {
        return Guid.regex.test(value);
    };
    Guid.newGuid = function () {
        var hexValues = "0123456789abcdef";
        var hexString = "";
        for (var i = 0; i < 32; i++) {
            hexString += hexValues.charAt(Math.floor(Math.random() * hexValues.length));
        }
        var guidValue = "".concat(hexString.substring(0, 8), "-").concat(hexString.substring(8, 12), "-").concat(hexString.substring(12, 16), "-").concat(hexString.substring(16, 20), "-").concat(hexString.substring(20));
        return new Guid(guidValue);
    };
    Guid.prototype.toString = function () {
        return this.value;
    };
    Guid.regex = /^[a-f\d]{8}-[a-f\d]{4}-[a-f\d]{4}-[a-f\d]{4}-[a-f\d]{12}$/i;
    return Guid;
}());
exports.Guid = Guid;
