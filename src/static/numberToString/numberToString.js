function numberToString(array) {
    if (!array?.length) return [];

    const stringArray = array.filter((value) => Number.isInteger(value)).map((value) => String(value));

    return stringArray;
}

module.exports = numberToString;
