import DateTime from "./DateTime";
import { culture } from '../types/globals.types';

declare class Convert {

    static ToNumber(value: any): number

    static ToString(value: any): string

    static ToBoolean(value: booleanType): boolean

    static ToChar(value: any): any

    static ToDateTime(value: Date | string | number): DateTime

    static ToBase64String(value: any): string

    static NumberToString(value: number, format?: format, culture?: culture): string


    static NumberToMoney(value: number, options?: { culture?: culture, prefix?: string, space?: boolean }): string

}

type booleanType = 'True' | 'T' | 'true' | 't' | 'False' | 'F' | 'false' | 'f' | 0 | 1 | '0' | '1'

type format = 'N0' | 'N1' | 'N2' | 'N3' | 'N4' | 'N5' | 'N6' | 'N7' | 'N8' | 'N9' | 'N10'

export default Convert;