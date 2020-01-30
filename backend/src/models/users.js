const debug = require('debug')('app:users');

debug(`in users`);

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
  registerUser: async id => {
    return 'registerUser';
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
