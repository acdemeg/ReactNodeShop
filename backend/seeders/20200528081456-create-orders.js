'use strict';

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('Orders', [
      {
        userId: 2,
        total: 21100,
        status: 'В обработке',
        orderCode: '1957861207'
      },
    ]);
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('Orders', null, {});
  },
};

