declare class DateTime {
    constructor(DateTime?: string | number | Date)

    private DateTime: Date;
    private DateTimeUtc: Date;

    Year: number;
    Months: number;
    Day: number;

    Hours: number;
    Minutes: number;
    Seconds: number;
    Milliseconds: number;

    TimezoneOffSet: number;

    static Now: Date;
    static UtcNow: Date;

    DayOfWeek: number;

    private setDate(dateTime: Date): Date

    AddYears(value: number): Date
    AddMonths(value: number): Date
    AddDays(value: number): Date
    AddHours(value: number): Date
    AddMinutes(value: number): Date
    AddSeconds(value: number): Date
    AddMilliseconds(value: number): Date

    getDateTime(): Date
    getDateTimeUtc(): Date
    getTimestamp(): number

    ToString(format?: format, culture?: culture): string
    ToStringCustom(format?: string): string
    ToLongDateString(): string
    ToLongTimeString(): string
}

type format = 'json' | 'd' | 'D' | 't' | 'T' | 'g' | 'G' | 'UTC';
type culture = 'pt-BR' | 'en-US';

export default DateTime