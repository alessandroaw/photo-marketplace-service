const express = require('express');
const router = express.Router();
const photoRouter = require('./photo');
const orderRouter = require('./order');
const scLogRouter = require('./sc-logger');

router.use('/photo', photoRouter);
router.use('/order', orderRouter);
router.use('/sclog', scLogRouter);

module.exports = router;