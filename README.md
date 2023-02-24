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

## Convert

### Using

```js
import { Convert } from "system-x64";
```

<br>

```js
import { Convert } from "system-x64";

console.log({
  toDate: Convert.toDate("24/02/2023", {
    culture: "pt-BR",
    default: new Date(),
  }),
  toNumber: Convert.toNumber("123.456,78", { culture: "pt-BR", default: 0 }),
  toBoolean: Convert.toBoolean("f"),
  toDecimal: Convert.toDecimal("123.456,78", { culture: "pt-BR", default: 0 }),
  toString: Convert.toString("test  "),
});
```

#### result:

```shell
{
  toDate: 2023-02-24T03:00:00.000Z,
  toNumber: 123.45678,
  toBoolean: false,
  toDecimal: 123.45678,
  toString: 'test'
}
```

## License

[MIT](LICENSE)
