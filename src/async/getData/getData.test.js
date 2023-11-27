const axios = require('axios');
const getData = require('./getData');

jest.mock('axios');

describe('test get data', () => {
    let response;
    beforeAll(() => {
        response = {
            data: [
                {
                    userId: 1,
                    id: 1,
                    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
                    body: 'quia et suscipit\ns est autem sunt rem eveniet architecto',
                },
                {
                    userId: 1,
                    id: 2,
                    title: 'qui est esse',
                    body: 'est rerumui aperiam non debitis possimus qui neque nisi nulla',
                },
            ],
        };
    });

    test('get data', async () => {
        axios.get.mockReturnValue(response);
        const data = await getData();
        expect(axios.get).toBeCalledTimes(1);
        expect(data).toEqual(['1', '2']);
    });
});
