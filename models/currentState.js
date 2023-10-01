// models/series.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const CurrentState = sequelize.define('CurrentState', {
  matchId: {type: DataTypes.BIGINT, allowNull: false, primaryKey: true, autoIncrement: false},
  inProgress: {type: DataTypes.BOOLEAN, allowNull: true},
  phase: {type: DataTypes.STRING, allowNull: false, },
  currentInningsIndex: {type: DataTypes.INTEGER, allowNull: true,},
  currentBatsmen: {type: DataTypes.JSON, allowNull: true,},
  facingBatsman: {type: DataTypes.BIGINT, allowNull: true,},
  nonFacingBatsman: {type: DataTypes.BIGINT, allowNull: true,},
  currentBowler: {type: DataTypes.BIGINT, allowNull: true,},
  currentBowlerCurrentSpell: {type: DataTypes.JSON, allowNull: true,},
  previousBowlerCurrentSpell: {type: DataTypes.JSON, allowNull: true,},
  partnership: {type: DataTypes.JSON, allowNull: true,},
  requiredRunrate: {type: DataTypes.FLOAT, allowNull: true,},
  recentOvers: {type: DataTypes.JSON, allowNull: true, },
  currentPartnership: {type: DataTypes.JSON, allowNull: true, },
});

module.exports = CurrentState;

/*
Object { inProgress: false, phase: "U", currentInningsIndex: 0, … }
    */