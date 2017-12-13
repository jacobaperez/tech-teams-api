module.exports = (Sequelize, DataTypes) => {
  const Positions = Sequelize.define('positions', {
    user: {
      type: DataTypes.INTEGER,
    },
    title: {
      type: DataTypes.STRING,
    },
    requirements: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    availability: {
      type: DataTypes.STRING,
    },
  });

  Positions.associate = models => {
    Positions.belongsToMany(models.projects, { through: 'positionsprojects' })
  };

  return Positions;

};
