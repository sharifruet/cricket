// models/match.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Match = sequelize.define('Match', {
  id: {type: DataTypes.BIGINT, allowNull: false, primaryKey: true, autoIncrement: true},
  team1: {type: DataTypes.BIGINT, allowNull: false, },
  team2: { type: DataTypes.BIGINT, allowNull: false, },
  date: { type: DataTypes.DATE, allowNull: true, },
  venueId: { type: DataTypes.BIGINT, allowNull: true, },
  seriesId: { type: DataTypes.BIGINT, allowNull: true, },
  resultId: { type: DataTypes.BIGINT, allowNull: true, },
  resultStr: { type: DataTypes.STRING, allowNull: true, },
  toss: { type: DataTypes.INTEGER, allowNull: true, },
});

module.exports = Match;
