const sequelize = require('../index');
const Sequelize = require('sequelize');

/* ------------- POSITIONS TABLE ------------------ */
const Positions = sequelize.define('positions', {
  PositionID: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  User: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: true,
  },
  Title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Requirements: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Project: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  Availability: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Positions.sync();
module.exports = Positions;
