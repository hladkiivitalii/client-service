const scheduler = require('./src/cron/crone.task');
const httpService = require('./src/http.service');
const randomService = require('./src/random.service');
const moment = require('moment');

async function main() {
    const id = randomService(200);
    const url = `http://localhost:3000/order/customer/${id}`;
    const start = moment().valueOf();
    await httpService(url)
    const end = moment().valueOf();

    console.log(`request time: ${(end - start)} ms`);
}

scheduler(main);


