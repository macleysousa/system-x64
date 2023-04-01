declare class Guid {
    private static readonly regex: RegExp;
    private value: string;

    constructor(value: string);

    public static isValid(value: string): boolean;

    public static newGuid(): Guid;

    public toString(): string;
}
