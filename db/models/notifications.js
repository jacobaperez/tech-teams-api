const sequelize = require('../index');
const Sequelize = require('sequelize');

const Notifications = sequelize.define('notifications', {
  NotificationID: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Notifications.sync();
module.exports = Notifications;
