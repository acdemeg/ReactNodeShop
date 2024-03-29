'use strict';

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('Users', [
      {
        name: 'Admin',
        email: 'admin@google.com',
        phone: '+79553271244',
        balance: 0,
        password: 'admin_passw',
        role: 'ADMIN',
        imagePath: 'user_avatar_1.png',
      },
      {
        name: 'John Doe',
        email: 'joo@google.com',
        phone: '+72478515484',
        balance: 7000,
        password: 'john_passw',
        role: 'USER',
        imagePath: 'user_avatar_2.png',
      },
      {
        name: 'Michail',
        email: 'micha@mail.ru',
        phone: '+75123694596',
        balance: 70000,
        password: 'mich_passw',
        role: 'USER',
        imagePath: 'user_avatar_3.png',
      },
      {
        name: 'Ivan',
        email: 'iv@mail.ru',
        phone: '+71247854698',
        balance: 500,
        password: 'iv_passw',
        role: 'USER',
        imagePath: 'user_avatar_4.png',
      },
      {
        name: 'Petr',
        email: 'Petr@mail.ru',
        phone: '+71254789632',
        balance: 3000,
        password: 'Petr_passw',
        role: 'USER',
        imagePath: 'user_avatar_5.png',
      },
      {
        name: 'Dima',
        email: 'Dima@mail.ru',
        phone: '+78951423784',
        balance: 10000,
        password: 'Dima_passw',
        role: 'USER',
        imagePath: 'user_avatar_6.png',
      },
      {
        name: 'Anton',
        email: 'Anton@mail.ru',
        phone: '+79823457156',
        balance: 1200,
        password: 'Anton_passw',
        role: 'USER',
        imagePath: 'user_avatar_7.png',
      },
      {
        name: 'Joseph',
        email: 'Joseph@mail.ru',
        phone: '+41487523249',
        balance: 100000,
        password: 'Joseph_passw',
        role: 'USER',
        imagePath: 'user_avatar_8.png',
      },
      {
        name: 'Micle',
        email: 'Micle@mail.ru',
        phone: '+64268441547',
        balance: 5000,
        password: 'Micle_passw',
        role: 'USER',
        imagePath: 'user_avatar_9.png',
      },
      {
        name: 'Luisa',
        email: 'Luisa@mail.ru',
        phone: '+31552984687',
        balance: 8000,
        password: 'Luisa_passw',
        role: 'USER',
        imagePath: 'user_avatar_10.png',
      },
      {
        name: 'Sebastian',
        email: 'Sebastian@mail.ru',
        phone: '+24568742569',
        balance: 2000,
        password: 'Sebastian_passw',
        role: 'USER',
        imagePath: 'user_avatar_11.png',
      },
      {
        name: 'Vika',
        email: 'Vika@mail.ru',
        phone: '+812141896587',
        balance: 1500,
        password: 'Vika_passw',
        role: 'USER',
        imagePath: 'user_avatar_12.png',
      },
      {
        name: 'Polina',
        email: 'Polina@mail.ru',
        phone: '+72111456983',
        balance: 100,
        password: 'Polina_passw',
        role: 'USER',
        imagePath: 'user_avatar_13.png',
      },
      {
        name: 'Achmed',
        email: 'Achmed@mail.ru',
        phone: '+32585241369',
        balance: 13000,
        password: 'Achmed_passw',
        role: 'USER',
        imagePath: 'user_avatar_14.png',
      },
      {
        name: 'Kim_Chen_In',
        email: 'Kim_Chen_In@mail.ru',
        phone: '+25687413697',
        balance: 50000,
        password: 'Kim_Chen_In_passw',
        role: 'USER',
        imagePath: 'user_avatar_15.png',
      },
    ]);
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
