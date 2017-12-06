const Sequelize = require('sequelize');

/* ------------------ DATABASE CONNECTION  ------------------ */
const sequelize = new Sequelize();

sequelize
  .authenticate()
  .then(() => console.log('Successfully connected to database!'))
  .catch(err => console.log('Error connecting to database:', err));

module.exports = sequelize;
