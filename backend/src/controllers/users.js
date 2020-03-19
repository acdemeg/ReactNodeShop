const debug = require('debug')('app:users');
const DB = require('../database');

const users = {
  getAll: async () => {
    return 'Users';
  },
  getProfile: async () => {
    return 'getUserProfile';
  },
  loginUser: async id => {
    return 'loginUser';
  },
  registerUser: async user => {
    return await DB.User.create({
      name: user.name,
      phone: user.phone,
      email: user.email,
      balance: 0
    })
      .then(userRecord => {
        DB.EmailPasswordMap.create({
          email: user.email,
          password: user.password
        });
      })
      .then(() => 'succses registration');
  },
  getProfileOfUser: async id => {
    return 'getProfileOfUser';
  },
  updateProfileOfUser: async id => {
    return 'updateProfileOfUser';
  },
  deleteUser: async id => {
    return 'deleteUser';
  },
};

module.exports = users;
