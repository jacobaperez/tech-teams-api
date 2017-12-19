const db = require('../index.js');

module.exports = {
  notifications: {
    post: (req, res) => {
      const email = req.body.email;
      let userId;

      db.users.findOne({ where: { email } })
        .then((body) => {
          userId = body.id;
        })
        .catch((err) => {
          throw err;
        });

      const notification = {
        type: req.body.type,
        user: userId,
      };

      db.notifications.create(notification)
        .catch((err) => {
          throw err;
        });
    },
  },
};
