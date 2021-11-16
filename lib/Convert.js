const DateTime = require("./DateTime");

class Convert {

    static ToNumber(value) {
        return Number(value)
    }

    static ToString(value) {
        return value.toString()
    }

    static ToBoolean(value) {
        if (typeof value == 'number') {
            return Boolean(value);
        } else {
            switch (value.toLowerCase()) {
                case 't':
                    return true;
                case 'true':
                    return true;
                case 'f':
                    return false;
                case 'false':
                    return false;
                default:
                    return undefined;
            }
        }

    }

    static ToChar(value) {
        return `${value}`.split(/(?=[\s\S])/u);
    }

    static ToDateTime(value) {
        return new DateTime(value)
    }

    static ToBase64String(value) {
        var buffer;
        if (value instanceof Buffer) {
            buffer = str;
        } else {
            buffer = Buffer.from(value.toString(), 'binary');
        }
        return buffer.toString('base64');
    }

    static NumberToString(value, format = 'N0', culture = undefined) {
        const minimumFractionDigits = Number(format.replace('N', ''))
        const maximumFractionDigits = Number(format.replace('N', ''))
        return new Intl.NumberFormat(culture, {
            style: 'decimal',
            minimumFractionDigits,
            maximumFractionDigits
        }).format(value)
    }

    static NumberToMoney(value, options = { culture: undefined, prefix: '', space: false }) {
        const { culture = undefined, prefix = '', space = true } = options;
        value = this.NumberToString(value, 'N2', culture);
        return `${prefix ?? ''}${space && prefix != '' ? ' ' : ''}${value}`
    }

}

module.exports = Convert