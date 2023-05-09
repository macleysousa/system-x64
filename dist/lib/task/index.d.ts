export declare class Task {
    private _action;
    private _isCompleted;
    private _isFaulted;
    private _isCanceled;
    private _result?;
    private _error?;
    private _continuations;
    constructor(_action: () => Promise<any>);
    start(): Promise<void>;
    get isCompleted(): boolean;
    get isFaulted(): boolean;
    get isCanceled(): boolean;
    get result(): any;
    get error(): any;
    continueWith(continuation: () => any): Promise<Task>;
    static run(action: () => any): Promise<Task>;
    static fromResult(result: any): Promise<Task>;
    static fromError(error: any): Promise<Task>;
    static delay(milliseconds: number): Promise<Task>;
}
