// models/match.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Team = sequelize.define('Team', {
  id: {type: DataTypes.BIGINT, allowNull: false, primaryKey: true, autoIncrement: false,},
  fullName: {type: DataTypes.STRING, allowNull: true, },
  shortName: {type: DataTypes.STRING, allowNull: true, },
  abbreviation: {type: DataTypes.STRING, allowNull: true, },
  type: {type: DataTypes.STRING, allowNull: true, },
  primaryColor: { type: DataTypes.STRING, allowNull: true, },
  secondaryColor: { type: DataTypes.STRING, allowNull: true, },

});

module.exports = Team;
