const Photo = require('../models/photo');

async function post(req, res, next) {
	console.log(req.body);
	const photo = new Photo ({ ...req.body });
	try {
        await photo.save();
        res.status(201).send(photo);
    } catch(e) {
		console.log(e);
        res.status(400).send(e);
    }
}

async function getAllPhotos(req, res, next) {
	res.send('OK');
}

async function patch(req, res, next) {
	res.send(req.params.imageHash);
	console.log(req);
}

module.exports = {
	post,
	getAllPhotos,
	patch
}