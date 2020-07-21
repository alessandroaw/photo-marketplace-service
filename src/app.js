// Module
const express = require('express');
const mongoose = require('./db/mongoose');

// Config
const app = express();
const port = process.env.PORT;

// Router
const photoRouter = require('./routes/photo');

// routes
app.use(express.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/photo', photoRouter);

app.get('/', (req, res) => {
    res.send('<h1>HELLO</h1>')
});

app.listen(port, () => {
    console.log('server is running on port ' + port); 
});