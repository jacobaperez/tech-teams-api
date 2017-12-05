const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'Techteams'
});

db.connect();

module.exports = db;
