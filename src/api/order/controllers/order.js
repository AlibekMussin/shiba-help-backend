'use strict';

/**
 * order controller
 */
const { nanoid } = require('nanoid');

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order', ({ strapi }) => ({
    async create(ctx) {

        const randomThreeDigits = Math.floor(Math.random() * 1000).toString().padStart(3, '0'); // Generate random three digits and pad with leading zeros if necessary
        const numericId = nanoid().replace(/\D/g, ''); // Generate random numeric ID
        const paddedId = numericId.padStart(6, '0'); // Pad the ID with leading zeros to a length of 6
        const order = `${randomThreeDigits}-${paddedId}`; // Combine the random three digits with the padded ID

        ctx.request.body.data = {
            ...ctx.request.body.data,
            order: order,
          };
      
          // 3
          const response = await super.create(ctx);
      
          // 4
          return response;
      },
}));
