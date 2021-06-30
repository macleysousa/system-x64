# system-x64

## Installing
```shell
npm i system-x64
```
or
```shell
yarn add system-x64
```

<br>
## Example

<br>

### using
```js
var DateTime = require('./index').DateTime
//import { DateTime } from 'system-x64';
```
<br>

```json
{
  DateTime: {
    datetime: {
      DateTime: 2021-06-30T17:03:35.036Z,
      DateTimeUtc: 2021-06-30T20:03:35.000Z,
      Timestamp: 1625072616
    },
    string: {
      DateTime: '30/06/2021 17:03:35',
      Json: '2021-06-30T17:03:35.036Z',
      D: '30/06/2021 17:03:35',
      d: '30/06/2021',
      t: '17:03',
      T: '17:03:35',
      g: '30/06/2021 17:03:35:03',
      G: '30/06/2021 17:03:35',
      UTC: '2021-06-30T20:03:35.000Z',
      Custom: '30-06',
      LongDate: 'Wed Jun 30 2021 17:03:35 GMT-0300 (Horário Padrão de Brasília)',
      LongTime: '17:03:35 GMT-0300 (Horário Padrão de Brasília)'
    },
    add: {
      AddYears: 2001-01-01T00:00:00.000Z,
      AddMonths: 2000-02-01T00:00:00.000Z,
      AddDays: 2000-01-02T00:00:00.000Z,
      AddHours: 2000-01-01T01:00:00.000Z,
      AddMinutes: 2000-01-01T00:01:00.000Z,
      AddSeconds: 2000-01-01T00:00:01.000Z,
      AddMilliseconds: 2000-01-01T00:00:00.001Z
    }
  }
}
```

<br>

## License

[MIT](LICENSE)