const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');

const sequelize = new Sequelize('techteams', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  dialectOptions: { multipleStatements: true },
});

const db = {};

const files = path.join(__dirname, './models');

const loadModels = dir => {
  fs
    .readdirSync(dir)
    .filter(file => {
      return (file.indexOf('.') !== 0) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
      const model = sequelize.import(path.join(dir, file));
      db[model.name] = model;
    });
};

loadModels(files);

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.sequelize
  .authenticate()
  .then(() => console.log('Successfully connected to database!'))
  .catch(err => console.log('Error connecting to database:', err));

db.sequelize.sync();

module.exports = db;
