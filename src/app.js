const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>HELLO</h1>')
})

app.listen(port, () => {
    console.log('server is running on port ' + port); 
})