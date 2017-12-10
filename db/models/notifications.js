module.exports = (Sequelize, DataTypes) => {
  const Notifications = Sequelize.define('notifications', {
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Notifications.associate = models => {
    Notifications.hasMany(models.users);
    Notifications.hasMany(models.projects);
  };

  return Notifications;
};
