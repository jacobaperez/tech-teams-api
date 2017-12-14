module.exports = (Sequelize, DataTypes) => {
  const Chats = Sequelize.define('chats', {
    link: {
      type: DataTypes.STRING,
    },
  });

  Chats.associate = models => {
    Chats.belongsToMany(models.users, { through: 'chatsusers' });
  };

  return Chats;
};
