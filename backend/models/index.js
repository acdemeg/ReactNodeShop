'use strict';

const { DataTypes } = require('sequelize');
const db = require('../src/database');

exports.User = require('./user')(db, DataTypes);
exports.Order = require('./order')(db, DataTypes);
exports.Product = require('./product')(db, DataTypes);
exports.ProductInOrder = require('./product_in_order')(db, DataTypes);