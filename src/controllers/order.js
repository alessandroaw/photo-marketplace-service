const Order = require('../models/order');

async function get(req, res, next) {
	const { clientAddress } = req.params;
	try {
		const orders = await Order.find({ clientAddress }).populate('imageId');
		res.status(200).send(orders);
	} catch (e) {
		res.status(400).send(e);
	}
}

async function post(req, res, next) {
	console.log(req.body);

	const order = new Order(req.body);

	try {
		await order.save();
		res.status(201).send(order);
		console.log('success');
	} catch(e) {
		console.log(e);
		res.status(400).send(e);
	}
}

async function patch(req, res, next) {
	const { id } = req.params;
	try {
		const order = await Order.findByIdAndUpdate(id, {$set: { paid: true }});
		res.send(order);
	} catch (e) {
		console.log(e);
		res.status(400).send(e);	
	}
}

module.exports = { get, post, patch };