const axios = require('axios');
const crypto = require('crypto');

const sleep = (ms) => new Promise((resolve) => { setTimeout(resolve, ms) });

const main = async() => {
    const ms = process.argv[2];
    const url = process.argv[3];
    const text = process.argv[4];

    while (true) {
        await sleep(ms);

        const { data } = await axios.get(url);
        const removed = !data.includes(text);
        if (removed) {
            console.log("\007 \007 \007 \007 \007 \007");
        } else {
            console.log("monitoring...");
        }
    }
};

main();
