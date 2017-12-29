const mongoose = require('mongoose');

// Telling mongoose which promise library to use.
mongoose.Promise = global.Promise;

// Connect to the database.

mongoose.connect('mongodb://localhost:27017/TodoApp',{useMongoClient:true});

module.exports = {mongoose};
