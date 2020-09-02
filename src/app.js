// Module
require('./db/mongoose');
const express = require('express');
const logger = require('./middlewares/simple-logger');
const path = require('path');

// Config
const app = express();
const port = process.env.PORT;

// Router
const apiRouter = require('./routes/');

// routes
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, '/public/uploads')));

// CORS FIX
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(logger);

app.use('/api', apiRouter);

app.get('/', (req, res) => {
    res.send('<h1>HELLO</h1>')
});

app.listen(port, () => {
    console.log('server is running on port ' + port); 
});