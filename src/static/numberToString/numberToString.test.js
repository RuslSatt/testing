const numberToString = require('./numberToString');

describe('test number to string', () => {
    test('numbers to string', async () => {
        expect(numberToString([1, 2, 3])).toEqual(['1', '2', '3']);
    });
    test('string to string', async () => {
        expect(numberToString(['1', '2', '3'])).toEqual([]);
    });
    test('undefined or number to string', async () => {
        expect(numberToString([undefined, undefined, 3])).toEqual(['3']);
    });
    test('undefined to string', async () => {
        expect(numberToString(undefined)).toEqual([]);
    });
});
