export class Timer {
    private intervalId: NodeJS.Timeout | null = null;
    private interval: number;
    private callback: () => void;
    public running: boolean = false;

    constructor(interval: number, callback: () => void) {
        this.interval = interval;
        this.callback = callback;
    }

    start() {
        if (this.running) return; else this.running = true;

        this.callback();

        this.intervalId = setInterval(() => this.callback(), this.interval);
    }

    stop() {
        if (!this.running) return; else this.running = false;

        clearInterval(this.intervalId!);
        this.intervalId = null;
    }
}
