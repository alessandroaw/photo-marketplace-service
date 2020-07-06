const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
    photoName: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true
    }
});

const Photo = mongoose.model('Photos', photoSchema);

module.exports = Photo;