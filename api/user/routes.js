'use strict';

const userCtrl = require('./controller');
const Joi = require('joi');

/**
 *  User Routes
 */
module.exports = [
    {
        method: 'GET',
        path: '/list',
        config: {
            handler: userCtrl.getList
        }
    }
];