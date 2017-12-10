module.exports = (Sequelize, DataTypes) => {
  const Chats = Sequelize.define('chats', {
    link: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });

  Chats.associate = models => {
    Chats.belongsToMany(models.users, { through: 'ChatsUsers' });
  };

  return Chats;
};
