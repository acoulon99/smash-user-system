'use strict';

const userCtrl = require('./controller');
const Joi = require('joi');

/**
 *  User Routes
 */
module.exports = [
    {
        method: 'GET',
        path: '/',
        config: {
            handler: userCtrl.getList
        }
    },
    {
    	method: 'POST',
    	path: '/',
    	config: {
    		handler: userCtrl.register,
    		validate: {
    			payload: {
    				name: Joi.string(),
    				tag: Joi.string(),
    				character: Joi.string()
    			}
    		}
    	}
    }
];