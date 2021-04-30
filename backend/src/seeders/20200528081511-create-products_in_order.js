'use strict';

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('Product_in_Orders', [
      {
        count: 1,
        orderId: 1,
        productId: 3
      },
    ]);
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('Product_in_Orders', null, {});
  },
};


