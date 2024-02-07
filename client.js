// client.js
const http = require('https');

const options = {
    hostname: 'stream-server-kdfodunfwq-uc.a.run.app',
    // port: 3000,
    port: 443,
    path: '/upload',
    method: 'POST',
    headers: {
        'Transfer-Encoding': 'chunked'
    }
};

const req = http.request(options, (res) => {
    res.on('data', (chunk) => {
        console.log(`Response: ${chunk}`);
    });
});

// write chunks of data to the request
for (let i = 0; i < 1e3; i++) {
    req.write(`This is chunk number ${i}\n`);
}

req.end();