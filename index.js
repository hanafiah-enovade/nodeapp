const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.type('text').send('Salam Sejahtera!');
});

app.get('/about', (req, res) => {
    res.json({msg: 'Aplikasi nodeJS di AIW Lab'})
});

app.listen(4000, () => {
    console.log('Example app listening on port 4000!');
});

