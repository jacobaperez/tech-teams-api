const sequelize = require('../index');
const Sequelize = require('sequelize');

const Notifications = sequelize.define('notifications', {
  notificationid {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

Chats.sync();
module.exports = Chats;
