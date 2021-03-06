class DateTime {

    constructor(DateTime = new Date()) {

        if (typeof DateTime == 'string') {
            var date = new Date(DateTime);
            if (date.getTimezoneOffset() > 0) {
                this.DateTimeUtc = new Date(date.setMinutes(date.getMinutes() + (date.getTimezoneOffset())))
                this.setDate(new Date(date.setMinutes(date.getMinutes() - (date.getTimezoneOffset()))));
            } else {
                this.DateTimeUtc = date;
                this.setDate(date);
            }
        }
        else if (typeof DateTime == 'number') {
            var date = new Date(new Date(0).setSeconds(1625051235))
            this.DateTimeUtc = new Date(date.toUTCString());
            this.setDate(new Date(date.setMinutes(date.getMinutes() - (date.getTimezoneOffset()))));
        }
        else if (typeof DateTime == 'object') {
            this.DateTimeUtc = new Date(DateTime.toUTCString());
            var date = new Date(DateTime.setMinutes(DateTime.getMinutes() - (DateTime.getTimezoneOffset())))
            this.setDate(date);
        }
    }
    DateTime = new Date('0001-01-01T00:00:00.000Z');
    DateTimeUtc = new Date('0001-01-01T03:00:00.000Z');

    Year = 0;
    Months = 0;
    Day = 0;

    Hours = 0;
    Minutes = 0;
    Seconds = 0;
    Milliseconds = 0;

    TimezoneOffSet = 0;

    static Now = () => {
        return new DateTime(new Date().toJSON());
    }

    DayOfWeek = 0;

    setDate(dateTime) {
        this.DateTime = dateTime;
        this.Timestamp = Math.ceil(this.DateTime.getTime() / 1000)

        this.Year = dateTime.getUTCFullYear();
        this.Months = dateTime.getUTCMonth() + 1;
        this.Day = dateTime.getUTCDate();

        this.Hours = dateTime.getUTCHours();
        this.Minutes = dateTime.getUTCMinutes();
        this.Seconds = dateTime.getUTCSeconds();
        this.Milliseconds = dateTime.getUTCMilliseconds();

        this.TimezoneOffSet = dateTime.getTimezoneOffset();

        this.DayOfWeek = dateTime.getUTCDay();
    }

    AddYears(value = 0) {
        var result = this.DateTime;
        this.setDate(new Date(result.setFullYear(this.DateTime.getFullYear() + value)));
        return new DateTime(this.DateTime.toJSON());
    }

    AddMonths(value = 0) {
        var result = this.DateTime;
        this.setDate(new Date(result.setMonth(this.DateTime.getMonth() + value)));
        return new DateTime(this.DateTime.toJSON());
    }

    AddDays(value = 0) {
        var result = this.DateTime;
        this.setDate(new Date(result.setDate(this.DateTime.getDate() + value)));
        return new DateTime(this.DateTime.toJSON());
    }

    AddHours(value = 0) {
        var result = this.DateTime;
        this.setDate(new Date(result.setHours(this.DateTime.getHours() + value)));
        return new DateTime(this.DateTime.toJSON());
    }

    AddMinutes(value = 0) {
        var result = this.DateTime;
        this.setDate(new Date(result.setMinutes(this.DateTime.getMinutes() + value)));
        return new DateTime(this.DateTime.toJSON());
    }

    AddSeconds(value = 0) {
        var result = this.DateTime;
        this.setDate(new Date(result.setSeconds(this.DateTime.getSeconds() + value)));
        return new DateTime(this.DateTime.toJSON());
    }

    AddMilliseconds(value = 0) {
        var result = this.DateTime;
        this.setDate(new Date(result.setMilliseconds(this.DateTime.getMilliseconds() + value)));
        return new DateTime(this.DateTime.toJSON());
    }


    ToString(format = undefined, culture = undefined) {

        var date = this.DateTimeUtc.toLocaleDateString(culture);
        var time = this.DateTimeUtc.toLocaleTimeString(culture);

        const hours = this.Hours >= 9 ? `${this.Hours}` : `0${this.Hours}`;
        const minutes = this.Minutes >= 9 ? `${this.Minutes}` : `0${this.Minutes}`;
        const seconds = this.Seconds >= 9 ? `${this.Seconds}` : `0${this.Seconds}`;

        switch (format) {
            case 'd':
                return date;
            case 't':
                return `${hours}:${minutes}`;
            case 'T':
                return time;
            case 'g':
                return `${date} ${time}:${minutes}`;
            case 'G':
                return `${date} ${hours}:${minutes}:${seconds}`;
            case 'json':
                return this.DateTime.toJSON();
            case 'UTC':
                return this.DateTimeUtc.toJSON();
            default:
                return `${date} ${time}`;
        }
    }

    ToStringCustom(format = "") {
        /*        
         yyyy => year //example 2021
         yy => year //example 21
 
         MM => months //example 01
         M => months //example 1
 
         dd => day   //example 02
         d => day   //example 2
 
         hh => hours  //example 03
         h => hours  //example 3
 
         mm => minutes  //example 04
         m => minutes  //example 4 
 
         ss => seconds  //example 05
         s => seconds  //example 5
 
         ms => milliseconds  //example 000
         */

        var yy = `${this.Year.toString().substring(2, 4)}`;
        var yyyy = `${this.Year}`;
        var M = `${this.Months}`;
        var MM = this.Months >= 9 ? `${this.Months}` : `0${this.Months}`;
        var d = `${this.Day}`;
        var dd = this.Day >= 9 ? `${this.Day}` : `0${this.Day}`;
        var h = this.Hours;
        var hh = this.Hours >= 9 ? `${this.Hours}` : `0${this.Hours}`;
        var m = this.Minutes;
        var mm = this.Minutes >= 9 ? `${this.Minutes}` : `0${this.Minutes}`;
        var s = this.Seconds;
        var ss = this.Seconds >= 9 ? `${this.Seconds}` : `0${this.Seconds}`;
        var ms = this.Milliseconds >= 9 ? `${this.Milliseconds}` : `0${this.Milliseconds}`;

        let date = format;
        date = date.replace('yyyy', yyyy);
        date = date.replace('yy', yy).replace('y', '');

        date = date.replace('MM', MM);
        date = date.replace('M', M).replace('M', '');

        date = date.replace('dd', dd);
        date = date.replace('d', d).replace('d', '');

        date = date.replace('hh', hh);
        date = date.replace('h', h).replace('h', '');

        date = date.replace('mm', mm);
        date = date.replace('m', m).replace('m', '');

        date = date.replace('ss', ss);
        date = date.replace('s', s).replace('s', '');

        date = date.replace('ms', ms);

        return date;

    }

    ToLongDateString() {
        return this.DateTimeUtc.toString();
    }

    ToLongTimeString() {
        return this.DateTimeUtc.toTimeString();
    }

}

module.exports = DateTime;