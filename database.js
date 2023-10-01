// database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('proborto_bandhanhara', 'proborto', '!BadPassw0rd', {
  host: '172.104.185.189',
  dialect: 'mysql',
});

module.exports = sequelize;

