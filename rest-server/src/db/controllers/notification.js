const db = require('../index.js');

module.exports = {
  post: (req, res) => {

    const notification = {
      type: req.body.type,
      sender: req.body.sender,
      recipient: req.body.recipient,
      position: req.body.position,
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
