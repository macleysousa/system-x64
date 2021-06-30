var DateTime = require('./index').DateTime;

const datetime = new DateTime(1625051235);
console.log({
    DateTime: {
        datetime: {
            DateTime: datetime.getDateTime(),
            DateTimeUtc: datetime.getDateTimeUtc(),
            Timestamp: datetime.getTimestamp()
        },
        string: {
            DateTime: datetime.ToString(),
            Json: datetime.ToString('json'),
            D: datetime.ToString('D'),
            d: datetime.ToString('d'),
            t: datetime.ToString('t'),
            T: datetime.ToString('T'),
            g: datetime.ToString('g'),
            G: datetime.ToString('G'),
            UTC: datetime.ToString('UTC'),
            Custom: datetime.ToStringCustom('dd-MM'),
            LongDate: datetime.ToLongDateString(),
            LongTime: datetime.ToLongTimeString()
        }
    }
});

// var Convert = require('./index').Convert;

// const convert = new Convert();
// console.log(convert);
