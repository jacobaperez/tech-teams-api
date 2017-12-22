const db = require('../index.js');

module.exports = {
  addPosition: (req, res) => {
    const position = {
      project: req.body.project,
      title: req.body.title,
      requirements: req.body.requirements,
      description: req.body.description,
      availability: req.body.availability,
    };

    db.users.findOne({ where: { email: req.body.user } })
      .then(data => {
        position.user = data.name;
        position.imageurl = data.imageurl;
      })

    db.positions.create(position)
      .then(data => {
        res.send(data);
      })
      .catch((err) => {
        throw err;
      });
  },

  updatePosition: (req, res) => {
    const position = {
      requirements: req.body.requirements,
      description: req.body.description,
      availability: req.body.availability,
    };

    db.users.findOne({ where: { email: req.body.user } })
      .then(data => {
        position.user = data.name;
        position.imageurl = data.imageurl;
      })

    db.positions.update(position, { where: { project: req.body.project, title: req.body.title } })
      .catch(err => {
        throw err;
      });
  },

  deletePosition: (req, res) => {
    db.positions.destroy({ where: { project: req.body.project, title: req.body.title, description: req.body.description } })
      .catch(err => {
        throw err;
      });
  },
};
