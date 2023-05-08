'use strict';

/**
 * cowboy-test controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::cowboy-test.cowboy-test');
