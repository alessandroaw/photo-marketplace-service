const express = require('express');
const router = express.Router();
const photoRouter = require('./photo');
const orderRouter = require('./order');

router.use('/photo', photoRouter);
router.use('/order', orderRouter);

module.exports = router;