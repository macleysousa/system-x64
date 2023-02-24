import { Culture } from "../..";
import { ConvertInterface } from "./index.d";

class ConvertConstructor implements ConvertInterface {
    toDate(value: any): Date;
    toDate(value: any, options?: { culture?: Culture | undefined; default?: Date | undefined; } | undefined): Date;
    toDate(value: any, options?: any): Date {
        if (value instanceof Date) return value;

        const _value = value.toString().trim();

        let convertedValue: any;
        switch (options?.culture) {
            case 'pt-BR':
                convertedValue = new Date(_value.replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$2/$1/$3'));
                break;
            case 'en-US':
                convertedValue = new Date(_value);
                break;
            case 'de-DE':
                convertedValue = new Date(_value.replace(/(\d{2})\.(\d{2})\.(\d{4})/, '$2/$1/$3'));
                break;
            case 'ja-JP':
                convertedValue = new Date(_value.replace(/(\d{4})\/(\d{2})\/(\d{2})/, '$2/$3/$1'));
                break;
            default:
                convertedValue = new Date(_value);
                break;
        }

        if (_value === '') return options?.default;

        if (isNaN(convertedValue) && options?.default != undefined) return options?.default;

        if (isNaN(convertedValue) && options?.default == undefined) throw new Error(`The value '${value}' is not a date.`);

        return convertedValue;
    }
    toNumber(value: any): Number;
    toNumber(value: any, options?: { culture?: Culture; default?: Number; }): Number;
    toNumber(value: any, options?: any): Number {
        if (typeof value === 'number') return value;

        const _value = value.toString().trim();

        let convertedValue: any;
        switch (options?.culture) {
            case 'pt-BR':
                convertedValue = Number(_value.replace(',', '').replace(',', '.'));
                break;
            case 'en-US':
                convertedValue = Number(_value.replace(',', ''));
                break;
            case 'de-DE':
                convertedValue = Number(_value.replace('.', '').replace(',', '.'));
                break;
            case 'ja-JP':
                convertedValue = Number(_value.replace(',', ''));
                break;
            default:
                convertedValue = Number(_value);
                break;
        }

        if (_value === '') return options?.default;

        if (isNaN(convertedValue) && options?.default != undefined) return options?.default;

        if (isNaN(convertedValue) && options?.default == undefined) throw new Error(`The value '${value}' is not a number.`);

        return convertedValue;
    }

    toString(value: any): String {
        return value.toString().trim();
    }

}

export const Convert = new ConvertConstructor();

