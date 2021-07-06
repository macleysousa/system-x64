import { culture } from '../types/globals.types';

declare class DateTime {
    constructor(DateTime?: string | number | Date)

    DateTime: Date;
    DateTimeUtc: Date;
    Timestamp: number


    Year: number;
    Months: number;
    Day: number;

    Hours: number;
    Minutes: number;
    Seconds: number;
    Milliseconds: number;

    TimezoneOffSet: number;

    static Now: DateTime;

    DayOfWeek: number;

    private setDate(dateTime: Date): Date

    AddYears(value: number): DateTime
    AddMonths(value: number): DateTime
    AddDays(value: number): DateTime
    AddHours(value: number): DateTime
    AddMinutes(value: number): DateTime
    AddSeconds(value: number): DateTime
    AddMilliseconds(value: number): DateTime

    ToString(format?: format, culture?: culture): string
    ToStringCustom(format?: string): string
    ToLongDateString(): string
    ToLongTimeString(): string
}

type format = 'json' | 'd' | 'D' | 't' | 'T' | 'g' | 'G' | 'UTC';


export default DateTime