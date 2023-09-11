// models/series.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Series = sequelize.define('Series', {
  id: {type: DataTypes.BIGINT, allowNull: false, primaryKey: true, autoIncrement: true},
  title: {type: DataTypes.STRING, allowNull: false, },
  description: {type: DataTypes.STRING, allowNull: false,},
  from: {type: DataTypes.DATE, allowNull: true,},
  to: {type: DataTypes.DATE, allowNull: true,},
  isEnd: {type: DataTypes.BOOLEAN, allowNull: true,},
  type: {type: DataTypes.INTEGER, allowNull: true,},
  numberOfTeams: {type: DataTypes.INTEGER, allowNull: true,},
  parentId: {type: DataTypes.BIGINT, allowNull: true, defaultValue: -1},
});

module.exports = Series;
