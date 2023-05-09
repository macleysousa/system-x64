import { Culture, Decimal } from "../..";
import moment from 'moment';

class ConvertConstructor {
    toBoolean(value: number | Number | string | String): boolean | Boolean {
        if (typeof value === 'boolean') return value;

        const _value = value.toString().trim().toLowerCase();

        if (_value === 'true') return true;
        if (_value === 'false') return false;
        if (_value === '1') return true;
        if (_value === '0') return false;
        if (_value === 't') return true;
        if (_value === 'f') return false;


        throw new Error(`The value '${value}' is not a boolean.`);
    }

    toDate(value: any): Date;
    toDate(value: any, options?: { format?: string; timezone?: string; default?: Date; } | undefined): Date;
    toDate(value: any, options?: { culture?: Culture; timezone?: string; default?: Date; } | undefined): Date;
    toDate(value: any, options?: any): Date {
        if (value instanceof Date) return value;

        const _value = value.toString().trim();

        let convertedValue: any;
        if (options?.format) {
            convertedValue = moment(_value, options.format).toDate();
        }
        else {
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
        }

        if (_value === '') return options?.default;

        if (isNaN(convertedValue) && options?.default != undefined) return options?.default;

        if (isNaN(convertedValue) && options?.default == undefined) throw new Error(`The value '${value}' is not a date.`);

        return new Date(moment(convertedValue).format('YYYY-MM-DDTHH:mm:ss') + (options?.timezone ?? '+00:00'));
    }

    toDecimal(value: any): Number | number;
    toDecimal(value: any, options?: { culture?: Culture | undefined; default?: Number | undefined; } | undefined): Number | number;
    toDecimal(value: any, options?: any): Decimal {
        return this.toNumber(value, options);
    }

    toNumber(value: any): number;
    toNumber(value: any, options?: { culture?: Culture; default?: Number; }): number;
    toNumber(value: any, options?: any): number {
        if (typeof value === 'number') return value;

        const _value = value.toString().trim();

        let convertedValue: any;
        switch (options?.culture) {
            case 'pt-BR':
                convertedValue = Number(_value.replace('.', '').replace(',', '.'));
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

    toString(value: any): string {
        return value.toString().trim();
    }
}

export const Convert = new ConvertConstructor();

