import { Culture } from "../..";
import { ConvertInterface } from "./index.d";
declare class ConvertConstructor implements ConvertInterface {
    toDate(value: any): Date;
    toDate(value: any, options?: {
        culture?: Culture | undefined;
        default?: Date | undefined;
    } | undefined): Date;
    toDecimal(value: any): Number;
    toDecimal(value: any, options?: {
        culture?: Culture | undefined;
        default?: Number | undefined;
    } | undefined): Number;
    toNumber(value: any): Number;
    toNumber(value: any, options?: {
        culture?: Culture;
        default?: Number;
    }): Number;
    toString(value: any): String;
}
export declare const Convert: ConvertConstructor;
export {};
