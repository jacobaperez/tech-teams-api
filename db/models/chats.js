const sequelize = require('../index');
const Sequelize = require('sequelize');

const Chats = sequelize.define('chats', {
  link: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  }
});

Chats.sync();
module.exports = Chats;
