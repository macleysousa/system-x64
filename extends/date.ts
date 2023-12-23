interface Date {
    addDays(days: number): Date;
    addHours(hours: number): Date;
    addMinutes(minutes: number): Date;
    addSeconds(seconds: number): Date;
    format(fmt: string): string;
    diffInMilliseconds(date: Date): number;
    diffInSeconds(date: Date): number;
    diffInMinutes(date: Date): number;
    diffInHours(date: Date): number;
    diffInDays(date: Date): number;
    diffInMonths(date: Date): number;
    diffInYears(date: Date): number;
}

Date.prototype.addDays = function (days: number): Date {
    const date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
};

Date.prototype.addHours = function (hours: number): Date {
    const date = new Date(this.valueOf());
    date.setTime(date.getTime() + hours * 60 * 60 * 1000);
    return date;
};

Date.prototype.addMinutes = function (minutes: number): Date {
    const date = new Date(this.valueOf());
    date.setTime(date.getTime() + minutes * 60 * 1000);
    return date;
};

Date.prototype.addSeconds = function (seconds: number): Date {
    const date = new Date(this.valueOf());
    date.setTime(date.getTime() + seconds * 1000);
    return date;
};

Date.prototype.format = function (fmt: string): string {
    const monthNames = [
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

    const padNumber = (num: number, size: number) => {
        let str = num.toString();
        while (str.length < size) {
            str = '0' + str;
        }
        return str;
    };

    const replaceMonth = (str: string): string => {
        const monthIndex = parseInt(str) - 1;
        return monthNames[monthIndex];
    };

    const replaceValue = (value: string, format: string): string => {
        switch (format) {
            case 'yyyy':
                return this.getFullYear().toString();
            case 'yy':
                return padNumber(this.getFullYear() % 100, 2);
            case 'MMMM':
                return replaceMonth(value);
            case 'MM':
                return padNumber(this.getMonth() + 1, 2);
            case 'dd':
                return padNumber(this.getDate(), 2);
            case 'HH':
                return padNumber(this.getHours(), 2);
            case 'mm':
                return padNumber(this.getMinutes(), 2);
            case 'ss':
                return padNumber(this.getSeconds(), 2);
            default:
                return value;
        }
    };

    let formattedString = fmt;
    formattedString = formattedString.replace(/yyyy/g, replaceValue('yyyy', 'yyyy'));
    formattedString = formattedString.replace(/yy/g, replaceValue('yy', 'yy'));
    formattedString = formattedString.replace(/MMMM/g, replaceValue('1', 'MMMM'));
    formattedString = formattedString.replace(/MM/g, replaceValue('MM', 'MM'));
    formattedString = formattedString.replace(/dd/g, replaceValue('dd', 'dd'));
    formattedString = formattedString.replace(/HH/g, replaceValue('HH', 'HH'));
    formattedString = formattedString.replace(/mm/g, replaceValue('mm', 'mm'));
    formattedString = formattedString.replace(/ss/g, replaceValue('ss', 'ss'));

    return formattedString;
};

Date.prototype.diffInMilliseconds = function (date: Date): number {
    return Math.abs(this.valueOf() - date.valueOf());
};

Date.prototype.diffInSeconds = function (date: Date): number {
    return this.diffInMilliseconds(date) / 1000;
};

Date.prototype.diffInMinutes = function (date: Date): number {
    return this.diffInSeconds(date) / 60
};

Date.prototype.diffInHours = function (date: Date): number {
    return this.diffInMinutes(date) / 60;
};

Date.prototype.diffInDays = function (date: Date): number {
    return this.diffInHours(date) / 24;
};

Date.prototype.diffInMonths = function (date: Date): number {
    return this.diffInDays(date) / 30;
};

Date.prototype.diffInYears = function (date: Date): number {
    return this.diffInDays(date) / 365;
};