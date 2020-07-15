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
app.use('/photo', photoRouter);

app.get('/', (req, res) => {
    res.send('<h1>HELLO</h1>')
});

app.listen(port, () => {
    console.log('server is running on port ' + port); 
});