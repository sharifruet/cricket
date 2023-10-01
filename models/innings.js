// models/series.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Innings = sequelize.define('Innings', {
  id: {type: DataTypes.BIGINT, allowNull: false, primaryKey: true, autoIncrement: true},
  matchId: {type: DataTypes.BIGINT, allowNull: true},
  inningsNumber: {type: DataTypes.INTEGER, allowNull: true},
  runRate: {type: DataTypes.FLOAT, allowNull: true,},
  declared: {type: DataTypes.BOOLEAN, allowNull: true,},
  rodl: {type: DataTypes.STRING, allowNull: true,},
  battingTeamId: {type: DataTypes.BIGINT, allowNull: true,},
  bowlingTeamId: {type: DataTypes.BIGINT, allowNull: true,},
  blocks: {type: DataTypes.INTEGER, allowNull: true,},
  balls: {type: DataTypes.INTEGER, allowNull: true,},
  ballsRemaining: {type: DataTypes.INTEGER, allowNull: true, },
  scorePrediction: {type: DataTypes.INTEGER, allowNull: true, },
  runs: {type: DataTypes.INTEGER, allowNull: true, },
  wkts: {type: DataTypes.INTEGER, allowNull: true, },
  ballsFaced: {type: DataTypes.INTEGER, allowNull: true, },
  fours: {type: DataTypes.INTEGER, allowNull: true, },
  sixes: {type: DataTypes.INTEGER, allowNull: true, },
  allOut: {type: DataTypes.BOOLEAN, allowNull: true, },
  fow: {type: DataTypes.JSON, allowNull: true, },
  extras: {type: DataTypes.JSON, allowNull: true, },
  declared: {type: DataTypes.BOOLEAN, allowNull: true, },
  battingStats: {type: DataTypes.JSON, allowNull: true, },
  bowlingStats: {type: DataTypes.JSON, allowNull: true, },
});

module.exports = Innings;

/*
runRate: '5.30',
    overProgress: '50',
    declared: false,
    scorecard: {
      runs: 265,
      wkts: 8,
      ballsFaced: 300,
      fours: 26,
      sixes: 7,
      allOut: false,
      battingStats: [Array],
      bowlingStats: [Array],
      fow: [Array],
      extras: [Object],
      declared: false
    },
    overHistory: [
      [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object],
      [Object], [Object]
    ],
    rodl: null,
    battingTeamId: 22,
    bowlingTeamId: 14,
    blocks: null,
    balls: null,
    ballsRemaining: null,
    scorePrediction: 254
    */