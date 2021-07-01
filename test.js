
//#region DateTime
var DateTime = require('./index').DateTime;
const datetime = new DateTime('2000-01-01T00:00:00.000Z');

// console.log({
//     DateTime: {
//         datetime: {
//             DateTime: datetime.DateTime,
//             DateTimeUtc: datetime.DateTimeUtc,
//             Timestamp: datetime.Timestamp
//         },
//         string: {
//             DateTime: datetime.ToString(),
//             Json: datetime.ToString('json'),
//             D: datetime.ToString('D'),
//             d: datetime.ToString('d'),
//             t: datetime.ToString('t'),
//             T: datetime.ToString('T'),
//             g: datetime.ToString('g'),
//             G: datetime.ToString('G'),
//             UTC: datetime.ToString('UTC'),
//             Custom: datetime.ToStringCustom('dd-MM'),
//             LongDate: datetime.ToLongDateString(),
//             LongTime: datetime.ToLongTimeString()
//         },
//         add: {
//             AddYears: new DateTime('2000-01-01T00:00:00.000Z').AddYears(1).DateTime,
//             AddMonths: new DateTime('2000-01-01T00:00:00.000Z').AddMonths(1).DateTime,
//             AddDays: new DateTime('2000-01-01T00:00:00.000Z').AddDays(1).DateTime,
//             AddHours: new DateTime('2000-01-01T00:00:00.000Z').AddHours(1).DateTime,
//             AddMinutes: new DateTime('2000-01-01T00:00:00.000Z').AddMinutes(1).DateTime,
//             AddSeconds: new DateTime('2000-01-01T00:00:00.000Z').AddSeconds(1).DateTime,
//             AddMilliseconds: new DateTime('2000-01-01T00:00:00.000Z').AddMilliseconds(1).DateTime,
//         }
//     }
// });

//#endregion

//#region Convert
var Convert = require('./index').Convert;

console.log({
    ToNumber: Convert.ToNumber("1"),
    ToString: Convert.ToString("1"),
    ToBoolean: Convert.ToBoolean('false'),
    ToChar: Convert.ToChar('ToChar'),
    ToDateTime: Convert.ToDateTime("2001-01-01T00:00:00.000Z").DateTime,
    ToBase64String: Convert.ToBase64String("1"),
    NumberToString: Convert.NumberToString(1000.02, 'N2'),
    NumberToMoney: Convert.NumberToMoney(1000, { prefix: 'R$' })
});

//#endregion
