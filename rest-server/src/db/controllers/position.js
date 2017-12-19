const db = require('../index.js');

module.exports = {
  addPosition: (req, res) => {
    const position = {
      user: req.body.user,
      project: req.body.project,
      title: req.body.title,
      requirements: req.body.requirements,
      description: req.body.description,
      availability: req.body.availability,
    };

    db.positions.create(position)
      .catch((err) => {
        throw err;
      });
  },

  updatePosition: (req, res) => {
    const position = {
      user: req.body.user,
      project: req.body.project,
      title: req.body.title,
      requirements: req.body.requirements,
      description: req.body.description,
      availability: req.body.availability,
    };

    db.positions.update(position)
      .catch((err) => {
        throw err;
      });
  },
};
