import { Convert, Timer, Task, Guid } from './index'

import './extends/array'
import './extends/date'
import './extends/string'

const items = [{ name: 'a' }, { name: 'b' }, {}];
const groups = items.groupBy(x => x);
console.log(groups.select(x => x.values.first()));


// console.log({
//     toDate: Convert.toDate('24/02/2023', { culture: 'pt-BR', default: new Date() }),
//     toMoment: Convert.toDate('24/02/2023 10:23', { format: 'DD/MM/YYYY HH:mm' }),
//     toNumber: Convert.toNumber('163,9', { culture: 'pt-BR', default: 0 }),
//     toBoolean_false: Convert.toBoolean(''),
//     toBoolean_true: Convert.toBoolean('s'),
//     toDecimal: Convert.toDecimal('123.456,78', { culture: 'pt-BR', default: 0 }),
//     toString: Convert.toString('test  '),
//     toMoney: Convert.toMoney(123456, { prefix: 'R$', fixad: 2, culture: 'pt-BR', default: 0 }),
// });

// const timer = new Timer(1000, () => console.log('timer', new Date()));

// timer.start();
// timer.start();

// setTimeout(() => console.log('timer', timer.running), 3000);

// setTimeout(() => timer.stop(), 5000);


// async function testTask() {

//     console.log('delay', new Date())
//     await Task.delay(2000);
//     console.log('delay 2', new Date())

// }

// testTask();

// const guid = Guid.newGuid();

// console.log(guid.toString().replace);
// console.log(Guid.isValid('e7f95b06-4e49-7e66-a917-e05ed74f4a75'));

console.log("hello world".replaceAll('o', '0'));