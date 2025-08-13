const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Salam Sejahtera!');
});

app.get('/about', (req, res) => {
    res.json({msg: 'Aplikasi nodeJS utk MCMC'})
});

app.get('/support', (req, res) => {
    res.json("Hello, i'm you support assistant");
});

app.get('/xilnex', (req, res) => {
    res.json("Welcome to Xilnex");
});

app.listen(4000, () => {
    console.log('Example app listening on port 4000!');
});

