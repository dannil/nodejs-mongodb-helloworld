// app.js

'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const product = require('./routes/product.route'); // Imports routes for the products

const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);

const dev_db_url = 'mongodb://nodejs:1234@localhost:27017/productstutorial';
const mongoDb = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDb);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/products', product);

const port = 3000;
app.listen(port, () => {
   console.log('Server running on port ' + port);
});