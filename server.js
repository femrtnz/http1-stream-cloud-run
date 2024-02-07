const express = require('express');
const app = express();

app.use(express.raw({ type: '*/*', limit: '5mb' }));

app.post('/upload', (req, res) => {
    const chunks = [];
    req.on('data', chunk => {
        console.log(`Received chunk: ${chunk}`);
        chunks.push(chunk);
    });
    req.on('end', () => {
        res.send('Upload complete');
    });
});

app.listen(3000, () => console.log('Server listening on port 3000'));
