// models/match.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Match = sequelize.define('Match', {
  id: {type: DataTypes.BIGINT, allowNull: false, primaryKey: true, autoIncrement: false,},
  name: {type: DataTypes.STRING, allowNull: true, },
  team1: {type: DataTypes.BIGINT, allowNull: true, },
  team2: { type: DataTypes.BIGINT, allowNull: true, },
  matchDate: { type: DataTypes.DATE, allowNull: true, },
  matchEndDate: { type: DataTypes.DATE, allowNull: true, },
  matchType: {type: DataTypes.STRING, allowNull: true, },
  oversLimit: {type: DataTypes.INTEGER, allowNull: true, },
  groupName: {type: DataTypes.STRING, allowNull: true, },
  totalBalls: {type: DataTypes.INTEGER, allowNull: true, },
  venueId: { type: DataTypes.BIGINT, allowNull: true, },
  seriesId: { type: DataTypes.BIGINT, allowNull: true, },
  resultId: { type: DataTypes.BIGINT, allowNull: true, },
  resultStr: { type: DataTypes.STRING, allowNull: true, },
  toss: { type: DataTypes.INTEGER, allowNull: true, },
});

module.exports = Match;
