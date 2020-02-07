const debug = require('debug')('app:users');
const Sequelize = require('sequelize');
const db = require('../database');

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

const User = db.sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  balance: {
    type: Sequelize.FLOAT,
    allowNull: true,
  },
});

module.exports = users;


