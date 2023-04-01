"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timer = void 0;
var Timer = /** @class */ (function () {
    function Timer(interval, callback) {
        this.intervalId = null;
        this.running = false;
        this.interval = interval;
        this.callback = callback;
    }
    Timer.prototype.start = function () {
        var _this = this;
        if (this.running)
            return;
        else
            this.running = true;
        this.callback();
        this.intervalId = setInterval(function () { return _this.callback(); }, this.interval);
    };
    Timer.prototype.stop = function () {
        if (!this.running)
            return;
        else
            this.running = false;
        clearInterval(this.intervalId);
        this.intervalId = null;
    };
    return Timer;
}());
exports.Timer = Timer;
