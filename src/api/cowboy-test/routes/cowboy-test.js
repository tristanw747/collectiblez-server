'use strict';

/**
 * cowboy-test router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::cowboy-test.cowboy-test');
