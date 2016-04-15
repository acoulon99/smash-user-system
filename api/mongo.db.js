/**
 * MongoDB Connection 
 */
const mongoose = require('mongoose');
const mongoDb = mongoose.connection;

mongoDb.on('error', function(err){
	console.error(err);
});

mongoDb.once('open', function(){
	console.log('Connected to MongoDB');
});

mongoose.connect('mongodb://localhost/smash');

module.exports = mongoose.connection;