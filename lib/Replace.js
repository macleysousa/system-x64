function Replace(value, searchValue, replaceValue) {
    if (typeof searchValue == 'string') {
        return value.split(searchValue).join(replaceValue)
    }
    else {
        searchValue.map((item) => {
            value = value.split(item).join(replaceValue)
        });
        return value;
    }

}

module.exports = Replace;