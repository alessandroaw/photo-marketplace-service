const express = require('express');
const scLogController = require('../controllers/sc-logger');

const router = express.Router();

router.post('/', scLogController.post);

module.exports = router;
