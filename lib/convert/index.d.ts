import { Culture, Decimal } from "../..";

export interface ConvertInterface {

    toBoolean(value: number | Number | string | String): Boolean | boolean;

    toDate(value: any): Date;
    toDate(value: any, options?: { culture?: Culture, default?: Date }): Date;

    toDecimal(value: any): Decimal;
    toDecimal(value: any, options?: { culture?: Culture, default?: Number | number }): Decimal;

    toNumber(value: any): number;
    toNumber(value: any, options?: { culture?: Culture, default?: Number | number }): number;

    toString(value: any): string;
}