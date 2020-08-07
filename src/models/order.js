const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
	clientAddress: {
		type: String,
		required: true,
		trim: true,
	},
	paymentAddress: {
		type: String,
		unique: true,
		trim: true,
	},
	index: {
		type: Number,
	},
	paid: {
		type: Boolean,
		required: true,
		default: false,
	},
	imageId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Photos'
	}
});

const Order = mongoose.model('Orders', orderSchema);

module.exports = Order;