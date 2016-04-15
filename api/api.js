'use strict';

/**
 * Main file for starting the api server
 */
const Glue = require('glue');
const manifest = require('./manifest');
const options = {
    relativeTo: __dirname
};

/**
 * Glue exports a single function compose accepting a JSON manifest file 
 * specifying the Hapi server options, connections and plugins
 */
Glue.compose(manifest, options, function (err, server) {
    server.start(function(err) {

        // throw error if the server doesnt start correctly
        if(err){
            throw err;
        }

        // Server started great!
        else {

            // initialize connection to mongo
            require('./mongo.db');

            // Welcome route
            server.route({
                method: 'GET',
                path: '/',
                config: {
                    handler: function(request, reply){
                        reply("Welcome to the Smash User System! Go <a href='/documentation'>here</a> for documentation.");
                    }
                }
            });

            // Note: when more than one connection is added, access with `server.connections[i].info.port`
        	console.log("Smash User System API started and listening on port: " + server.info.port);	
        }
    });
});