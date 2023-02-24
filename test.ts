import { Convert } from './index'

import './extends/date'



console.log({
    toDate: Convert.toDate('24/02/2023', { culture: 'pt-BR', default: new Date() }),
    toNumber: Convert.toNumber('123.456,78', { culture: 'pt-BR', default: 0 }),
    toBoolean: Convert.toBoolean('f'),
    toDecimal: Convert.toDecimal('123.456,78', { culture: 'pt-BR', default: 0 }),
    toString: Convert.toString('test  ')
});