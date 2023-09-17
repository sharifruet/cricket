// models/series.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Venue = sequelize.define('Venue', {
  id: {type: DataTypes.BIGINT, allowNull: false, primaryKey: true, autoIncrement: false},
  fullName: {type: DataTypes.STRING, allowNull: false, },
  shortName: {type: DataTypes.STRING, allowNull: true,},
  city: {type: DataTypes.STRING, allowNull: true,},
  country: {type: DataTypes.STRING, allowNull: true,},
  coordinates: {type: DataTypes.STRING, allowNull: true,},
});

module.exports = Venue;