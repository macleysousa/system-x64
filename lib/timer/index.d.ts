declare class Timer {
    private intervalId: NodeJS.Timeout | null;
    private interval: number;
    private callback: () => void;
    public running: boolean;

    constructor(interval: number, callback: () => void);

    start(): void;

    stop(): void;
}

export default Timer;