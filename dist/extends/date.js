"use strict";
Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
};
Date.prototype.addHours = function (hours) {
    var date = new Date(this.valueOf());
    date.setTime(date.getTime() + hours * 60 * 60 * 1000);
    return date;
};
Date.prototype.addMinutes = function (minutes) {
    var date = new Date(this.valueOf());
    date.setTime(date.getTime() + minutes * 60 * 1000);
    return date;
};
Date.prototype.addSeconds = function (seconds) {
    var date = new Date(this.valueOf());
    date.setTime(date.getTime() + seconds * 1000);
    return date;
};
Date.prototype.format = function (fmt) {
    var _this = this;
    var monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    var padNumber = function (num, size) {
        var str = num.toString();
        while (str.length < size) {
            str = '0' + str;
        }
        return str;
    };
    var replaceMonth = function (str) {
        var monthIndex = parseInt(str) - 1;
        return monthNames[monthIndex];
    };
    var replaceValue = function (value, format) {
        switch (format) {
            case 'yyyy':
                return _this.getFullYear().toString();
            case 'yy':
                return padNumber(_this.getFullYear() % 100, 2);
            case 'MMMM':
                return replaceMonth(value);
            case 'MM':
                return padNumber(_this.getMonth() + 1, 2);
            case 'dd':
                return padNumber(_this.getDate(), 2);
            case 'HH':
                return padNumber(_this.getHours(), 2);
            case 'mm':
                return padNumber(_this.getMinutes(), 2);
            case 'ss':
                return padNumber(_this.getSeconds(), 2);
            default:
                return value;
        }
    };
    var formattedString = fmt;
    formattedString = formattedString.replace(/yyyy/g, replaceValue('yyyy', 'yyyy'));
    formattedString = formattedString.replace(/YYYY/g, replaceValue('YYYY', 'yyyy'));
    formattedString = formattedString.replace(/yy/g, replaceValue('yy', 'yy'));
    formattedString = formattedString.replace(/YY/g, replaceValue('YY', 'yy'));
    formattedString = formattedString.replace(/MMMM/g, replaceValue('1', 'MMMM'));
    formattedString = formattedString.replace(/MM/g, replaceValue('MM', 'MM'));
    formattedString = formattedString.replace(/dd/g, replaceValue('dd', 'dd'));
    formattedString = formattedString.replace(/DD/g, replaceValue('DD', 'dd'));
    formattedString = formattedString.replace(/hh/g, replaceValue('hh', 'HH'));
    formattedString = formattedString.replace(/HH/g, replaceValue('HH', 'HH'));
    formattedString = formattedString.replace(/mm/g, replaceValue('mm', 'mm'));
    formattedString = formattedString.replace(/ss/g, replaceValue('ss', 'ss'));
    formattedString = formattedString.replace(/SS/g, replaceValue('SS', 'ss'));
    return formattedString;
};
Date.prototype.formatUTC = function (fmt) {
    var _this = this;
    var monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'Aguest',
        'September',
        'October',
        'November',
        'December',
    ];
    var padNumber = function (num, size) {
        var str = num.toString();
        while (str.length < size) {
            str = '0' + str;
        }
        return str;
    };
    var replaceMonth = function (str) {
        var monthIndex = parseInt(str) - 1;
        return monthNames[monthIndex];
    };
    var replaceValue = function (value, format) {
        switch (format) {
            case 'yyyy':
                return _this.getUTCFullYear().toString();
            case 'yy':
                return padNumber(_this.getUTCFullYear() % 100, 2);
            case 'MMMM':
                return replaceMonth(value);
            case 'MM':
                return padNumber(_this.getUTCMonth() + 1, 2);
            case 'dd':
                return padNumber(_this.getUTCDate(), 2);
            case 'HH':
                return padNumber(_this.getUTCHours(), 2);
            case 'mm':
                return padNumber(_this.getUTCMinutes(), 2);
            case 'ss':
                return padNumber(_this.getUTCSeconds(), 2);
            default:
                return value;
        }
    };
    var formattedString = fmt;
    formattedString = formattedString.replace(/yyyy/g, replaceValue('yyyy', 'yyyy'));
    formattedString = formattedString.replace(/YYYY/g, replaceValue('YYYY', 'yyyy'));
    formattedString = formattedString.replace(/yy/g, replaceValue('yy', 'yy'));
    formattedString = formattedString.replace(/YY/g, replaceValue('YY', 'yy'));
    formattedString = formattedString.replace(/MMMM/g, replaceValue('1', 'MMMM'));
    formattedString = formattedString.replace(/MM/g, replaceValue('MM', 'MM'));
    formattedString = formattedString.replace(/dd/g, replaceValue('dd', 'dd'));
    formattedString = formattedString.replace(/DD/g, replaceValue('DD', 'dd'));
    formattedString = formattedString.replace(/hh/g, replaceValue('hh', 'HH'));
    formattedString = formattedString.replace(/HH/g, replaceValue('HH', 'HH'));
    formattedString = formattedString.replace(/mm/g, replaceValue('mm', 'mm'));
    formattedString = formattedString.replace(/ss/g, replaceValue('ss', 'ss'));
    formattedString = formattedString.replace(/SS/g, replaceValue('SS', 'ss'));
    return formattedString;
};
Date.prototype.diffInMilliseconds = function (date) {
    return Math.abs(this.valueOf() - date.valueOf());
};
Date.prototype.diffInSeconds = function (date) {
    return this.diffInMilliseconds(date) / 1000;
};
Date.prototype.diffInMinutes = function (date) {
    return this.diffInSeconds(date) / 60;
};
Date.prototype.diffInHours = function (date) {
    return this.diffInMinutes(date) / 60;
};
Date.prototype.diffInDays = function (date) {
    return this.diffInHours(date) / 24;
};
Date.prototype.diffInMonths = function (date) {
    return this.diffInDays(date) / 30;
};
Date.prototype.diffInYears = function (date) {
    return this.diffInDays(date) / 365;
};
