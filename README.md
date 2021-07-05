# What is system-x64?
`system-x64` is a package that is based on C# conversions. Transacting functionally like `DateTime`. 

## Installing
```shell
npm i system-x64
```
or
```shell
yarn add system-x64
```

<br>

## DateTime

### Using
```js
var DateTime = require('system-x64').DateTime
//import { DateTime } from 'system-x64'
```
<br>

## Example

```js
const datetime = new DateTime('2000-01-01T00:00:00.000Z');

 console.log({
     DateTime: {
         datetime: {
             DateTime: datetime.DateTime,
             DateTimeUtc: datetime.DateTimeUtc,
             Timestamp: datetime.Timestamp
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
         },
         add: {
             AddYears: new DateTime('2000-01-01T00:00:00.000Z').AddYears(1).DateTime,
             AddMonths: new DateTime('2000-01-01T00:00:00.000Z').AddMonths(1).DateTime,
             AddDays: new DateTime('2000-01-01T00:00:00.000Z').AddDays(1).DateTime,
             AddHours: new DateTime('2000-01-01T00:00:00.000Z').AddHours(1).DateTime,
             AddMinutes: new DateTime('2000-01-01T00:00:00.000Z').AddMinutes(1).DateTime,
             AddSeconds: new DateTime('2000-01-01T00:00:00.000Z').AddSeconds(1).DateTime,
             AddMilliseconds: new DateTime('2000-01-01T00:00:00.000Z').AddMilliseconds(1).DateTime,
         }
     }
 })
```

#### result:

``` json
{
  "DateTime": {
    "datetime": {
      "DateTime":"2021-06-30T17:03:35.036",
      "DateTimeUtc":"2021-06-30T20:03:35.000",
      "Timestamp": 1625072616
    },
    "string": {
      "DateTime": "01/01/2021 17:03:35",
      "Json": "2021-06-30T17:03:35.036Z",
      "D": "30/06/2021 17:03:35",
      "d": "30/06/2021",
      "t": "17:03",
      "T": "17:03:35",
      "g": "30/06/2021 17:03:35:03",
      "G": "30/06/2021 17:03:35",
      "UTC": "2021-06-30T20:03:35.000Z",
      "Custom": "30-06",
      "LongDate": "Wed Jun 30 2021 17:03:35 GMT-0300 (Horário Padrão de Brasília)",
      "LongTime": "17:03:35 GMT-0300 (Horário Padrão de Brasília)"
    },
    "add": {
      "AddYears": "2001-01-01T00:00:00.000Z",
      "AddMonths": "2000-02-01T00:00:00.000Z",
      "AddDays": "2000-01-02T00:00:00.000Z",
      "AddHours": "2000-01-01T01:00:00.000Z",
      "AddMinutes": "2000-01-01T00:01:00.000Z",
      "AddSeconds": "2000-01-01T00:00:01.000Z",
      "AddMilliseconds": "2000-01-01T00:00:00.001Z"
    }
  }
}

```

### Custom
```js
yyyy => year //example 2021
yy   => year //example 21

MM   => months //example 01
M    => months //example 1

dd   => day   //example 02
d    => day   //example 2

hh   => hours  //example 03
h    => hours  //example 3

mm   => minutes  //example 04
m    => minutes  //example 4

ss   => seconds  //example 05
s    => seconds  //example 5

ms   => milliseconds  //example 000
```

<br>

## Convert

### Using
```js
var Convert = require('system-x64').Convert
//import { Convert } from 'system-x64'
```
<br>

``` js
var Convert = require('system-x64').Convert;

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
```

#### result:
```json
{
  "ToNumber": 1,
  "ToString": "1",
  "ToBoolean": false,
  "ToChar": [ "T", "o", "C", "h", "a", "r" ],
  "ToDateTime": "2001-01-01T00:00:00.000Z",
  "ToBase64String": "MQ==",
  "NumberToString": "1.000,02",
  "NumberToMoney": "R$ 1.000,00"
}
```


## License

[MIT](LICENSE)
