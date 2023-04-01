export declare class Timer {
    private intervalId;
    private interval;
    private callback;
    running: boolean;
    constructor(interval: number, callback: () => void);
    start(): void;
    stop(): void;
}
