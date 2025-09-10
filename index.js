const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Salam Sejahtera!');
});

app.get('/about', (req, res) => {
    res.json({msg: 'Demo Aplikasi nodeJS'})
});

app.get('/support', (req, res) => {
    res.json("Hello, i'm you support assistant");
});

app.get('/madani', (req, res) => {
    res.json("Salam Malaysia Madani");
});

app.get('/ictjohor', (req, res) => {
    res.json("Salam Maju Johor");
});

app.get('/demo', (req, res) => {
    res.json("This is a demo");
});

app.get('/alrajhi', (req, res) => {
    res.json("Hello AlRajhi");
});

app.listen(4000, () => {
    console.log('Example app listening on port 4000!');
});

