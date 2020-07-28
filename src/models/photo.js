const mongoose = require('mongoose');
const Web3 = require('web3');

const photoSchema = new mongoose.Schema({
	image: {
		type: String,
		required: true,
		trim: true,
	},
	imagePath: {
		type: String,
		required: true,
	},
	imageHash: {
		type: String,
	},
	photoManager: {
		type: String,
		required: true,
		trim: true,
	},
	description: {
		type: String,
		required: true,
		trim: true
	},
	tags: {
		type: Array,
	},
	price: {
		type: Number,
		required: true
	},
});

//hashing a password before saving it to the database
photoSchema.pre('save', async function (next) {
	const photo = this;
	
	if(photo.isModified('image')) {
	  photo.imageHash = Web3.utils.keccak256(photo.image);
	}
  
	next();
  });

const Photo = mongoose.model('Photos', photoSchema);

module.exports = Photo;