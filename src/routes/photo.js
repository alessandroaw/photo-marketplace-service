const express = require('express');
const router = express.Router();

const photoController = require('../controllers/photo');

router.get('/', photoController.getAllPhotos);
router.post('/', photoController.post);
router.patch('/:imageHash', photoController.patch);

module.exports = router;
