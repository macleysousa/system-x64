import { Culture } from "../..";
import { ConvertInterface } from "./index.d";
declare class ConvertConstructor implements ConvertInterface {
    toBoolean(value: number | Number | string | String): boolean | Boolean;
    toDate(value: any): Date;
    toDate(value: any, options?: {
        culture?: Culture | undefined;
        default?: Date | undefined;
    } | undefined): Date;
    toDecimal(value: any): Number | number;
    toDecimal(value: any, options?: {
        culture?: Culture | undefined;
        default?: Number | undefined;
    } | undefined): Number | number;
    toNumber(value: any): number;
    toNumber(value: any, options?: {
        culture?: Culture;
        default?: Number;
    }): number;
    toString(value: any): string;
}
export declare const Convert: ConvertConstructor;
export {};
