const express = require('express');
const upload = require('../middlewares/image-uploads');
const photoController = require('../controllers/photo');
const Photo = require('../models/photo');

const router = express.Router();

router.get('/', photoController.getAllPhotos);
router.post('/', upload.single('imageFile'), photoController.post);
router.patch('/:imageHash', photoController.patch);

module.exports = router;
