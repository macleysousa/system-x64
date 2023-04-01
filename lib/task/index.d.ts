declare class Task<TResult> {
    private _isCompleted;
    private _isFaulted;
    private _isCanceled;
    private _result?;
    private _error?;
    private _continuations;
    constructor(action: () => Promise<TResult>);
    start(): Promise<void>;
    readonly isCompleted: boolean;
    readonly isFaulted: boolean;
    readonly isCanceled: boolean;
    readonly result: TResult;
    readonly error: any;
    continueWith(continuation: () => any): Task<any>;
    static run<TResult>(action: () => Promise<TResult>): Promise<Task<TResult>>;
    static fromResult<TResult>(result: TResult): Promise<Task<TResult>>;
    static fromError<TResult>(error: any): Promise<Task<TResult>>;
    static delay(milliseconds: number): Promise<Task<any>>;
}
