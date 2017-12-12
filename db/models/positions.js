module.exports = (Sequelize, DataTypes) => {
  const Positions = Sequelize.define('positions', {
    user: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
    project: {
      type: DataTypes.INTEGER,
    },
    availability: {
      type: DataTypes.STRING,
    },
  });

  return Positions;
};
