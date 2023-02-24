import { Culture } from "../..";

export interface ConvertInterface {
    toNumber(value: any): Number;
    toNumber(value: any, options?: { culture?: Culture, default?: Number }): Number;

    toString(value: any): String;

    toDate(value: any): Date;
    toDate(value: any, options?: { culture?: Culture, default?: Date }): Date;
}