class Task {

    static async Delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    static async Run(callback) {
        return new Promise(() => { callback(); });
    }
}

module.exports = Task;