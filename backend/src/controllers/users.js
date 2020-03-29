const debug = require('debug')('app:users');
const DB = require('../database');

const users = {
  getAll: async () => {
    return 'Users';
  },
  getProfile: async () => {
    return 'getUserProfile';
  },
  loginUser: async user => {
    return await DB.EmailPasswordMap.findOne({
      where: { 
        email: user.email,
        password: user.password 
      }
    });
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
          email: userRecord.email,
          password: user.password,
          userId: userRecord.id
        });
      })
      .then(() => 'succses registration')
      .catch(() => 'reject registration')
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
