const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const product = new Schema({
    title: String,
    description: String,
    price: Number,
    color: [String],
    size: [String],
    images: [String],
}, { timestamps: false });

module.exports = mongoose.model('Product', product)
