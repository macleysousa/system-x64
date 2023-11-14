interface String {
    replaceAll(searchValue: string, replaceValue: string): string;
    replaceAll(searchValue: string, replacer: (substring: string, ...args: any[]) => string): string;
}
