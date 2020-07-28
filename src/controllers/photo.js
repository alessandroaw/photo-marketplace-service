const Photo = require('../models/photo');

async function post(req, res, next) {
	console.log(req.file);
	console.log(req.body);
	const photo = new Photo({ ...req.body, imagePath: `uploads/${req.file.filename}` });
	try {
        await photo.save();
		res.status(201).send(photo);
		console.log('success');
    } catch(e) {
		console.log(e);
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
	console.log(req);
}

module.exports = {
	post,
	getAllPhotos,
	patch
}