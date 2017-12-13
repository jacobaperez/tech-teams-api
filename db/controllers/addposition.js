const db = require('../index.js');

module.exports = {
  addPosition: {
    post: (req, res) => {
      const position = {
        user: req.body.user,
        title: req.body.title,
        requirements: req.body.requirements,
        description: req.body.description,
        availability: req.body.availability,
      };
    }
  }
}
