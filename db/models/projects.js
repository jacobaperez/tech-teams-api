const sequelize = require('../index');
const Sequelize = require('sequelize');

const Projects = sequelize.define('projects', {
  projectid: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  headquarters: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageurl: {
    type: Sequelize.STRING,
    allowNull: false
  },
  techstack: {
    type: Sequelize.STRING,
    allowNull: false
  },
  websites: {
    type: Sequelize.STRING,
    allowNull: false
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

Projects.sync();
module.exports = Projects;
