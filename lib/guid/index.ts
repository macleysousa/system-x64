export class Guid {
    private static readonly regex: RegExp = /^[a-f\d]{8}-[a-f\d]{4}-[a-f\d]{4}-[a-f\d]{4}-[a-f\d]{12}$/i;

    private value: string;

    constructor(value: string) {
        if (!Guid.isValid(value)) {
            throw new Error(`'${value}' is not a valid Guid.`);
        }

        this.value = value;
    }

    public static isValid(value: string): boolean {
        return Guid.regex.test(value);
    }

    public static newGuid(): Guid {
        const hexValues = "0123456789abcdef";
        let hexString = "";
        for (let i = 0; i < 32; i++) {
            hexString += hexValues.charAt(Math.floor(Math.random() * hexValues.length));
        }
        const guidValue = `${hexString.substring(0, 8)}-${hexString.substring(8, 12)}-${hexString.substring(12, 16)}-${hexString.substring(16, 20)}-${hexString.substring(20)}`;
        return new Guid(guidValue);
    }

    public toString(): string {
        return this.value;
    }
}
