// models/products.model.js

'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let productSchema = new Schema({
    name: { type: String, required: true, max: 100 },
    price: { type: Number, required: true },
});

// Export the model
module.exports = mongoose.model('Product', productSchema);