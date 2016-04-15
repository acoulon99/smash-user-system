'use strict';

const Boom = require('boom');
const User = require('../models/user.model');

/**
 * Get User List
 */
exports.getList = function(request, reply){
	User.find({}, function(err, userList){
		err ? reply(Boom.badImplementation(err)) : reply(userList);
	});
};

/**
 * Register
 */
exports.register = function(request, reply){
	User.create(request.payload, function(err, user){
		err ? reply(Boom.badImplementation(err)) : reply(user);
	});
};