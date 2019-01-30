// controllers/products.js

'use strict';

const Product = require('../models/product.model');

//Simple version, without validation or sanitation
exports.test = (req, res) => {
    res.send('Greetings from the Test controller!');
};

exports.create = (req, res) => {
    let product = new Product({
        name: req.body.name,
        price: req.body.price
    });
    product.save((err, product) => {
        if (err) {
            return next(err);
        }
        var msg = 'Created product \'' + product.name + '\' (' + product.id + ')';
        console.log(msg);
        res.send(msg);
    });
};

exports.getAll = (req, res, next) => {
    Product.find((err, products) => {
        if (err) {
            return next(err);
        }
        res.send(products);
    });
};

exports.get = (req, res, next) => {
    Product.findById(req.params.id, (err, product) => {
        if (err) {
            return next(err);
        }
        res.send(product);
    });
};

exports.update = (req, res, next) => {
    Product.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, product) => {
        if (err) {
            return next(err);
        }
        var msg = 'Updated product \'' + product.name + '\' (' + product.id + ')';
        console.log(msg);
        res.send(msg);
    });
};

exports.delete = (req, res, next) => {
    Product.findByIdAndRemove(req.params.id, (err, product) => {
        if (err) {
            return next(err);
        }
        var msg = 'Deleted product \'' + product.name + '\' (' + product.id + ')';
        console.log(msg);
        res.send(msg);
    });
};