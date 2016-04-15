'use strict';

/**
 * Checkin Plugin
 */
const routes = require('./routes');

/**
 * Plugin Registration
 */
exports.register = function (server, options, next) {

	// load routes
	server.route(routes);

    next();
};

/**
 * Plugin Attributes
 * contains Hapi plugin attribute information (name, version, etc)
 */
exports.register.attributes = {
    pkg: require('./package.json')
};