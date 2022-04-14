class Guid {
    guid;
    createAt;
    constructor(guid) {
        this.guid = guid;
        this.createAt = new Date();
    }

    static NewGuid() {
        const generate = () => {
            var d = new Date().getTime();
            var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now() * 1000)) || 0;
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
                var r = Math.random() * 16;
                if (d > 0) {
                    r = (d + r) % 16 | 0;
                    d = Math.floor(d / 16);
                } else {
                    r = (d2 + r) % 16 | 0;
                    d2 = Math.floor(d2 / 16);
                }
                return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
            });
        }
        return new Guid(generate());
    }

    Equals(other) {
        if (typeof other == 'string')
            return this.guid == other;
        else if (typeof other == 'object')
            return this.guid == other.ToString();
    }

    GetType() {
        return "System.Guid";
    }

    ToByteArray() {
        return this.guid.split('').map(c => c.charCodeAt(0));
    }

    ToString() {
        return this.guid;
    }

}


module.exports = Guid;