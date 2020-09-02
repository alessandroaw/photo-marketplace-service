const Photo = require('../models/photo');

async function post(req, res, next) {
	req.body.tags = req.body.tags.split(',');
	const photo = new Photo({ ...req.body, imagePath: `uploads/${req.file.filename}` });
	try {
        await photo.save();
		res.status(201).send(photo);
    } catch(e) {
		console.error(e);
        res.status(400).send(e);
    }
}

async function getAllPhotos(req, res, next) {
	try {
		// const photo = 'phtoto';
		const photos = await Photo.find({});
		res.status(200).send(photos);
	} catch (e) {
		console.error(e);
		res.status(400).send(e);
	}
}

async function patch(req, res, next) {
	res.send(req.params.imageHash);
}

module.exports = {
	post,
	getAllPhotos,
	patch
}