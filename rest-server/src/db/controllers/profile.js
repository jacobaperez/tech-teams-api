const db = require('../index.js');

module.exports = {
  get: (req, res) => {
    const email = req.body.email;
    db.users.findOne({ where: { email } })
      .then((info) => {
        res.send(info);
      })
      .catch((err) => {
        throw err;
      });

    let userId;

    db.users.findOne(email)
      .then((body) => {
        userId = body.id;
      })
      .catch((err) => {
        throw err;
      });

    db.projectsusers.findAll({ where: { userId } })
      .then((projs) => {
        res.send(projs);
      })
      .catch((err) => {
        throw err;
      });

    db.notifications.findAll({ where: { userId } })
      .then((notes) => {
        res.send(notes);
      })
      .catch((err) => {
        throw err;
      });
  },

  update: (req, res) => {
    const email = req.body.email;
    const updatedUser = {
      name: req.body.name,
      position: req.body.position,
      availability: req.body.availability,
      description: req.body.description,
      location: req.body.location,
      imageurl: req.body.imageurl,
      title: req.body.title,
    };

    db.users.update(updatedUser, { where: { email } })
      .catch((err) => {
        throw err;
      });
  },
};
