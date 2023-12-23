interface Date {
    addDays(days: number): Date;
    addHours(hours: number): Date;
    addMinutes(minutes: number): Date;
    addSeconds(seconds: number): Date;
    format(fmt: string): string;
    formatUTC(fmt: string): string;
    diffInMilliseconds(date: Date): number;
    diffInSeconds(date: Date): number;
    diffInMinutes(date: Date): number;
    diffInHours(date: Date): number;
    diffInDays(date: Date): number;
    diffInMonths(date: Date): number;
    diffInYears(date: Date): number;
}
