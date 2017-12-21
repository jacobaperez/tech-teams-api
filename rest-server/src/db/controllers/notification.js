const db = require('../index.js');

module.exports = {
  post: (req, res) => {
    const email = req.body.email;

    const notification = {
      type: req.body.type,
      user: email,
    }

    db.notifications.create(notification)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        throw err;
      });
  }
}
