const db = require('../index.js');

module.exports = {
  profile: {
    get: (req, res) => {
      const email = req.body.email;
      db.users.findOne({ where: { email: email } })
        .then(info => {
          res.send(info)})
        .catch(err => {
          throw err;
        });

      let userId;

      db.users.findOne(email)
        .then(body => {
          userId = body.id})
        .catch(err => {
          throw err;
        })

      db.projectsusers.findAll({ where: { userId: userId } })
        .then(projs => {
          res.send(projs)})
        .catch(err => {
          throw err;
        });

        db.notifications.findAll({ where: { userId: userId } })
          .then(notes => {
            res.send(notes)})
          .catch(err => {
            throw err;
          })
    }
  }
}
