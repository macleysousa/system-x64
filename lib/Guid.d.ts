declare class Guid {
    private guid: string;
    private createAt: Date;
    constructor(guid?: string)

    static NewGuid(): Guid;

    public Equals(other: Guid): boolean;

    public GetType(): String;

    public ToByteArray(): Array<number>[];

    public ToString(): string
}

export default Guid;