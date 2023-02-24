import { Culture, Decimal } from "../..";

export interface ConvertInterface {
    toDate(value: any): Date;
    toDate(value: any, options?: { culture?: Culture, default?: Date }): Date;

    toDecimal(value: any): Decimal;
    toDecimal(value: any, options?: { culture?: Culture, default?: Number }): Decimal;

    toNumber(value: any): Number;
    toNumber(value: any, options?: { culture?: Culture, default?: Number }): Number;

    toString(value: any): String;
}