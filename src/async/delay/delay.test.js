const delay = require('./delay');

describe('test async', () => {
    test('sum', async () => {
        const sum = await delay(() => 5 + 5, 0);
        expect(sum).toBe(10);
    });
});
