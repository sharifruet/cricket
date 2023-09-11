// database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('cricket365', 'root', 'toor', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
