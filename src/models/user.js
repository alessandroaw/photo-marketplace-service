const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	address: {
		type: String,
		required: true,
		trim: true,
		unique: true,
	},
	photoManager: {
		type: String,
		trim: true,
	},
});

const User = mongoose.model('Users', userSchema);

module.exports = User;