const express = require('express');
const router = express.Router();

const orderController = require('../controllers/order');

router.get('/:clientAddress', orderController.get);
router.post('/', orderController.post);
router.post('/:id', orderController.patch);

module.exports = router;
