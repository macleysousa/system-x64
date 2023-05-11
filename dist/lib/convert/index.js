"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Convert = void 0;
var moment_1 = __importDefault(require("moment"));
var ConvertConstructor = /** @class */ (function () {
    function ConvertConstructor() {
    }
    ConvertConstructor.prototype.toBoolean = function (value) {
        if (typeof value === 'boolean')
            return value;
        var _value = value.toString().trim().toLowerCase();
        if (_value === '')
            return false;
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
        if (_value === 'yes')
            return true;
        if (_value === 'no')
            return false;
        if (_value === 'y')
            return true;
        if (_value === 'n')
            return false;
        if (_value === 'on')
            return true;
        if (_value === 'off')
            return false;
        if (_value === 'enabled')
            return true;
        if (_value === 'disabled')
            return false;
        if (_value === 'enable')
            return true;
        if (_value === 'disable')
            return false;
        if (_value === 'active')
            return true;
        if (_value === 'inactive')
            return false;
        if (_value === 'in')
            return true;
        if (_value === 'out')
            return false;
        if (_value === 'i')
            return true;
        if (_value === 'o')
            return false;
        if (_value === 'ok')
            return true;
        if (_value === 'error')
            return false;
        if (_value === 'success')
            return true;
        if (_value === 'fail')
            return false;
        if (_value === 's')
            return true;
        if (_value === 'f')
            return false;
        if (_value === 'undefined')
            return false;
        throw new Error("The value '".concat(value, "' is not a boolean."));
    };
    ConvertConstructor.prototype.toDate = function (value, options) {
        var _a;
        if (value instanceof Date)
            return value;
        var _value = value.toString().trim();
        var convertedValue;
        if (options === null || options === void 0 ? void 0 : options.format) {
            convertedValue = (0, moment_1.default)(_value, options.format).toDate();
        }
        else {
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
        }
        if (_value === '')
            return options === null || options === void 0 ? void 0 : options.default;
        if (isNaN(convertedValue) && (options === null || options === void 0 ? void 0 : options.default) != undefined)
            return options === null || options === void 0 ? void 0 : options.default;
        if (isNaN(convertedValue) && (options === null || options === void 0 ? void 0 : options.default) == undefined)
            throw new Error("The value '".concat(value, "' is not a date."));
        return new Date((0, moment_1.default)(convertedValue).format('YYYY-MM-DDTHH:mm:ss') + ((_a = options === null || options === void 0 ? void 0 : options.timezone) !== null && _a !== void 0 ? _a : '+00:00'));
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
                convertedValue = Number(_value.replace('.', '').replace(',', '.'));
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
