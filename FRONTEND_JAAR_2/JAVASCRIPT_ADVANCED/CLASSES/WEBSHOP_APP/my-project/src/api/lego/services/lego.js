'use strict';

/**
 * lego service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::lego.lego');
