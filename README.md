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
  toMoney: Convert.toMoney(123456, { prefix: 'R$', fixad: 2, culture: 'pt-BR', default: 0 }),
});
```

#### result:

```shell
{
  toDate: 2023-02-24T03:00:00.000Z,
  toNumber: 123.45678,
  toBoolean: false,
  toDecimal: 123.45678,
  toString: 'test',
  toMoney: 'R$ 123.456,00'
}
```



## Timer

### Using

```js
import { Timer } from "system-x64";
```

<br>

```js
import { Timer } from "system-x64";

const timer = new Timer(1000, () => console.log('timer', new Date()));

timer.start();

setTimeout(() => console.log('timer', timer.running), 3000);

setTimeout(() => timer.stop(), 5000);

```

#### result:

```shell
timer 2023-04-01T13:18:47.198Z
timer 2023-04-01T13:18:48.213Z
timer 2023-04-01T13:18:49.218Z
timer true
timer 2023-04-01T13:18:50.218Z
timer 2023-04-01T13:18:51.231Z
```

## Task

### Using

```js
import { Task } from "system-x64";
```

<br>

```js
import { Task } from "system-x64";

async function test() {

    console.log('delay before', new Date())
    await Task.delay(2000);
    console.log('delay after', new Date())

}

test();

```

#### result:

```shell
delay before 2023-04-01T13:48:42.403Z
delay after 2023-04-01T13:48:44.420Z
```

## Guid

### Using

```js
import { Guid } from "system-x64";
```

<br>

```js
import { Guid } from "system-x64";

const guid = Guid.newGuid();

console.log(guid.toString());
console.log(Guid.isValid('e7f95b06-4e49-7e66-a917-e05ed74f4a75'));

```

#### result:

```shell
7b94b288-adf5-8d70-f469-2edd851d88b0
true
```


## License

[MIT](LICENSE)
