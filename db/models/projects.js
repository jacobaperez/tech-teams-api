module.exports = (Sequelize, DataTypes) => {
  const Projects = Sequelize.define('projects', {
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    headquarters: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageurl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    techstack: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    websites: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Projects.associate = models => {
    Projects.belongsToMany(models.users, { through: 'ProjectsUsers' });
  };

  return Projects;
};
