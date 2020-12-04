const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/about', (req, res) => {
    res.json({msg: 'nodejs app'})
});

app.listen(4000, () => {
    console.log('Example app listening on port 4000!');
});

