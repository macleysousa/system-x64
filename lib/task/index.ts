export class Task {
    private _isCompleted: boolean = false;
    private _isFaulted: boolean = false;
    private _isCanceled: boolean = false;
    private _result?: any;
    private _error?: any;
    private _continuations: Array<() => any> = [];

    constructor(private _action: () => Promise<any>) { }

    async start(): Promise<void> {
        if (this._isCompleted) {
            throw new Error("Task already completed");
        }

        try {
            const result = await this._action();
            this._isCompleted = true;
            this._result = result;
            this._continuations.forEach((continuation) => continuation());
        } catch (error) {
            this._isCompleted = true;
            this._isFaulted = true;
            this._error = error;
            this._continuations.forEach((continuation) => continuation());
        }
    }

    get isCompleted(): boolean {
        return this._isCompleted;
    }

    get isFaulted(): boolean {
        return this._isFaulted;
    }

    get isCanceled(): boolean {
        return this._isCanceled;
    }

    get result(): any {
        if (!this._isCompleted) {
            throw new Error("Task not completed");
        }

        if (this._isFaulted) {
            throw this._error;
        }

        return this._result;
    }

    get error(): any {
        if (!this._isCompleted) {
            throw new Error("Task not completed");
        }

        return this._error;
    }

    async continueWith(continuation: () => any): Promise<Task> {
        const continuationTask = new Task(() => Promise.resolve());

        if (!this._isCompleted) {
            this._continuations.push(async () => {
                try {
                    const continuationResult = await continuation();
                    continuationTask.start();
                    return continuationResult;
                } catch (error) {
                    continuationTask._isCompleted = true;
                    continuationTask._isFaulted = true;
                    continuationTask._error = error;
                    continuationTask.start();
                }
            });
        } else {
            try {
                const continuationResult = await continuation();
                continuationTask.start();
                return continuationResult;
            } catch (error) {
                continuationTask._isCompleted = true;
                continuationTask._isFaulted = true;
                continuationTask._error = error;
                continuationTask.start();
            }
        }

        return continuationTask;
    }

    static async run(action: () => any): Promise<Task> {
        const task = new Task(async () => await action());
        await task.start();
        return task;
    }

    static async fromResult(result: any): Promise<Task> {
        const task = new Task(async () => await Promise.resolve(result));
        await task.start();
        return task;
    }

    static async fromError(error: any): Promise<Task> {
        const task = new Task(async () => await Promise.reject(error));
        await task.start();
        return task;
    }

    static async delay(milliseconds: number): Promise<Task> {
        return new Promise((resolve) => {
            setTimeout(() => {
                const task = new Task(async () => await Promise.resolve());
                task.start();
                resolve(task);
            }, milliseconds);
        });
    }
}
