const express = require('express');
const router = express.Router();
const photoRouter = require('./photo');

router.use('/photo', photoRouter);

module.exports = router;