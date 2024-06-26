import { Culture } from "../..";
declare class ConvertConstructor {
    toBoolean(value: number | Number | string | String): boolean | Boolean;
    toDate(value: any): Date;
    toDate(value: any, options?: {
        format?: string;
        timezone?: string;
        default?: Date;
    } | undefined): Date;
    toDate(value: any, options?: {
        culture?: Culture;
        timezone?: string;
        default?: Date;
    } | undefined): Date;
    toDecimal(value: any): number;
    toDecimal(value: any, options?: {
        culture?: Culture | undefined;
        default?: Number | undefined;
    } | undefined): number;
    toNumber(value: any): number;
    toNumber(value: any, options?: {
        culture?: Culture;
        default?: Number;
    }): number;
    toMoney(value: number | Number): string;
    toMoney(value: number | Number, options?: {
        prefix?: string;
        fixed?: number;
        culture?: Culture;
        default?: Number;
    }): string;
    toString(value: any): string;
}
export declare const Convert: ConvertConstructor;
export { };
