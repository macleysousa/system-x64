"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Convert = void 0;
var ConvertConstructor = /** @class */ (function () {
    function ConvertConstructor() {
    }
    ConvertConstructor.prototype.toBoolean = function (value) {
        if (typeof value === 'boolean')
            return value;
        var _value = value.toString().trim().toLowerCase();
        if (_value === 'true')
            return true;
        if (_value === 'false')
            return false;
        if (_value === '1')
            return true;
        if (_value === '0')
            return false;
        if (_value === 't')
            return true;
        if (_value === 'f')
            return false;
        throw new Error("The value '".concat(value, "' is not a boolean."));
    };
    ConvertConstructor.prototype.toDate = function (value, options) {
        if (value instanceof Date)
            return value;
        var _value = value.toString().trim();
        var convertedValue;
        switch (options === null || options === void 0 ? void 0 : options.culture) {
            case 'pt-BR':
                convertedValue = new Date(_value.replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$2/$1/$3'));
                break;
            case 'en-US':
                convertedValue = new Date(_value);
                break;
            case 'de-DE':
                convertedValue = new Date(_value.replace(/(\d{2})\.(\d{2})\.(\d{4})/, '$2/$1/$3'));
                break;
            case 'ja-JP':
                convertedValue = new Date(_value.replace(/(\d{4})\/(\d{2})\/(\d{2})/, '$2/$3/$1'));
                break;
            default:
                convertedValue = new Date(_value);
                break;
        }
        if (_value === '')
            return options === null || options === void 0 ? void 0 : options.default;
        if (isNaN(convertedValue) && (options === null || options === void 0 ? void 0 : options.default) != undefined)
            return options === null || options === void 0 ? void 0 : options.default;
        if (isNaN(convertedValue) && (options === null || options === void 0 ? void 0 : options.default) == undefined)
            throw new Error("The value '".concat(value, "' is not a date."));
        return convertedValue;
    };
    ConvertConstructor.prototype.toDecimal = function (value, options) {
        return this.toNumber(value, options);
    };
    ConvertConstructor.prototype.toNumber = function (value, options) {
        if (typeof value === 'number')
            return value;
        var _value = value.toString().trim();
        var convertedValue;
        switch (options === null || options === void 0 ? void 0 : options.culture) {
            case 'pt-BR':
                convertedValue = Number(_value.replace(',', '').replace(',', '.'));
                break;
            case 'en-US':
                convertedValue = Number(_value.replace(',', ''));
                break;
            case 'de-DE':
                convertedValue = Number(_value.replace('.', '').replace(',', '.'));
                break;
            case 'ja-JP':
                convertedValue = Number(_value.replace(',', ''));
                break;
            default:
                convertedValue = Number(_value);
                break;
        }
        if (_value === '')
            return options === null || options === void 0 ? void 0 : options.default;
        if (isNaN(convertedValue) && (options === null || options === void 0 ? void 0 : options.default) != undefined)
            return options === null || options === void 0 ? void 0 : options.default;
        if (isNaN(convertedValue) && (options === null || options === void 0 ? void 0 : options.default) == undefined)
            throw new Error("The value '".concat(value, "' is not a number."));
        return convertedValue;
    };
    ConvertConstructor.prototype.toString = function (value) {
        return value.toString().trim();
    };
    return ConvertConstructor;
}());
exports.Convert = new ConvertConstructor();
