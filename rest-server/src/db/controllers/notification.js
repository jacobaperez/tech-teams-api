const db = require('../index.js');

module.exports = {
  createNotification: (req, res) => {
    const notification = {
      type: req.body.type,
      sender: req.body.sender,
      recipient: req.body.recipient,
      position: req.body.position,
      status: 'active',
    }

    db.notifications.create(notification)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        throw err;
      });
  },

  updateNotification: (req, res) => {
    const notification = {
      type: req.body.type,
      sender: req.body.sender,
      recipient: req.body.recipient,
      position: req.body.position,
      status: req.body.status,
    }

    db.notifications.update(notification,
      { where: {
        type: req.body.type,
        sender: req.body.sender,
        recipient: req.body.recipient,
        position: req.body.position,
      }})
      .then(body => {
        res.send(body);
      })
      .catch(err => {
        throw err;
      })
  }
}
