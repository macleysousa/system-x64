export declare class Guid {
    private static readonly regex;
    private value;
    constructor(value: string);
    static isValid(value: string): boolean;
    static newGuid(): Guid;
    toString(): string;
}
