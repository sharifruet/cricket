// models/series.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Over = sequelize.define('Over', {
  matchId: {type: DataTypes.BIGINT, allowNull: false, primaryKey: true, autoIncrement: false},
  inningsNumber: {type: DataTypes.INT, allowNull: false, primaryKey: true},
  inningsNumber: {type: DataTypes.STRING, allowNull: false, },
  runRate: {type: DataTypes.FLOAT, allowNull: true,},
  declared: {type: DataTypes.BOOLEAN, allowNull: true,},
  rodl: {type: DataTypes.STRING, allowNull: true,},
  battingTeamId: {type: DataTypes.BIGINT, allowNull: true,},
  bowlingTeamId: {type: DataTypes.BIGINT, allowNull: true,},
  blocks: {type: DataTypes.INTEGER, allowNull: true,},
  balls: {type: DataTypes.INT, allowNull: true,},
  ballsRemaining: {type: DataTypes.INT, allowNull: true, },
  scorePrediction: {type: DataTypes.INT, allowNull: true, },
  runs: {type: DataTypes.INT, allowNull: true, },
  wkts: {type: DataTypes.INT, allowNull: true, },
  ballsFaced: {type: DataTypes.INT, allowNull: true, },
  fours: {type: DataTypes.INT, allowNull: true, },
  sixes: {type: DataTypes.INT, allowNull: true, },
  allOut: {type: DataTypes.BOOLEAN, allowNull: true, },
  fow: {type: DataTypes.INT, allowNull: true, },
  extras: {type: DataTypes.INT, allowNull: true, },
  declared: {type: DataTypes.BOOLEAN, allowNull: true, },
});

module.exports = Over;

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