const axios = require('axios');
const numberToString = require('../../static/numberToString/numberToString');

async function getData() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const ids = response.data.map((item) => item.id);
        const stringIds = numberToString(ids);
        return stringIds;
    } catch (e) {
        console.log(e.message);
    }
}

module.exports = getData;
