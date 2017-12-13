const db = require('../index.js');

module.exports = {
  projectSearch: (req, res) => {
    const query = req.body.query;

    db.query(`select * from (
    SELECT 1 as relevance, * FROM projects
    WHERE name LIKE '%${query}%'
    union
    select 10 as relevance, * FROM projects
    WHERE name LIKE '%${query}%'
    union
    select 100 as relevance, * FROM projects
    WHERE name LIKE '%${query}%')
    order by relevance asc`, { type: db.QueryTypes.SELECT})
      .then(body => {
        res.send(body)})
      .catch(err => {
        throw err;
      });
  },

  userSearch: (req, res) => {
    const query = req.body.query;

    db.query(`select * from (
    SELECT 1 as relevance, * FROM users
    WHERE title LIKE '%${query}%'
    union
    select 10 as relevance, * FROM users
    WHERE title LIKE '%${query}%'
    union
    select 100 as relevance, * FROM users
    WHERE title LIKE '%${query}%')
    order by relevance asc`, { type: db.QueryTypes.SELECT})
      .then(body => {
        res.send(body)})
      .catch(err => {
        throw err;
      });
  }
};
