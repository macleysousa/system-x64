interface String {
    replaceAll(searchValue: string | RegExp, replaceValue: string): string;
    replaceAll(searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string;
}

String.prototype.replaceAll = function (searchValue: string | RegExp, replaceValue: string | any): string {
    const regex = new RegExp(searchValue, "g");
    return this.replace(regex, replaceValue);
};

String.prototype.replaceAll = function (searchValue: string | RegExp, replacer: any): string {
    const regex = new RegExp(searchValue, "g");
    return this.replace(regex, replacer);
};