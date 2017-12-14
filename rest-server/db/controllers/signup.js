const db = require('../index.js');

module.exports = {
  post: (req, res) => {
    const user = {
      name: req.body.name,
      email: req.body.email,
      position: req.body.position,
      availability: req.body.availability,
      description: req.body.description,
      location: req.body.location,
      imageurl: req.body.imageurl,
      title: req.body.title,
    };

    db.users.create(user)
      .catch(err => {
        throw err;
      });
  }
}
