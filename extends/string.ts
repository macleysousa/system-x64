interface String {
    replaceAll(searchValue: string, replaceValue: string): string;
    replaceAll(searchValue: string, replacer: (substring: string, ...args: any[]) => string): string;
}

String.prototype.replaceAll = function (searchValue: string, replaceValue: string | ((substring: string, ...args: any[]) => string)): string {
    if (typeof replaceValue === 'string') {
        return this.split(searchValue).join(replaceValue);
    } else if (typeof replaceValue === 'function') {
        const parts = this.split(searchValue);
        for (let i = 1; i < parts.length; i += 2) {
            parts[i] = replaceValue(parts[i - 1] + searchValue + parts[i]);
        }
        return parts.join('');
    }

    return this as string;
};
