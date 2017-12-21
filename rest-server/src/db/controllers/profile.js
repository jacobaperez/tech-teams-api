const db = require('../index.js');
import jwtDecode from 'jwt-decode';

module.exports = {
  get: (req, res) => {
    // console.log('IN QUERY:', jwtDecode(req.headers.authorization).email);
    const email = jwtDecode(req.headers.authorization).email;
    // db.users.findOne({ where: { email: email } })
    //   .then((info) => {
    //     console.log('ALL OF A USERS INFO', info);
    //     res.send(info);
    //     res.send('fucccc')
    //   })
    //   .catch((err) => {
    //     throw err;
    //   });

    // let userId;
    const azz = {}

    db.users.findOne({ where: { email: email },
    include: [{ model: db.projects } ]})
      .then(body => {
        let userId = body.id
        console.log(body)
        azz['body'] = body
        // db.users.findAll({ where: { userId: userId }, include: { model: db.sequelize.Sequelize.models.projectsusers } })
        // .then(projs => {
        //   res.send(projs)
          res.send(azz);
            // db.notifications.findAll({ where: { user: email } })
            // .then((notes) => {
            //   azz.notes = notes
            //   res.send(azz)
            // })
            // .catch((err) => {
            //   throw err;
            // })
        // })
        // .catch(err => {
        //   throw err;
      //   })
      })
      .catch(err => {
        throw err;
      })
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

    db.users.update(updatedUser, { where: { email: email } })
      .catch((err) => {
        throw err;
      });
  },
};
