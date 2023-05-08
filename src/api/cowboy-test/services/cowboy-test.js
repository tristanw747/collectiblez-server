'use strict';

/**
 * cowboy-test service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cowboy-test.cowboy-test');
