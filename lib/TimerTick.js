class TimerTick {

    isRun = false;
    action;
    interval;
    callback;

    constructor(action, interval) {
        this.action = action;
        this.interval = interval ?? 1000;
    }

    start() {
        this.action();
        this.callback = setInterval(this.action, this.interval);
        this.isRun = true;
        return this.isRun;
    }

    stop() {
        clearInterval(this.callback);
        this.isRun = false;
        return !this.isRun;
    }

}

module.exports = TimerTick;