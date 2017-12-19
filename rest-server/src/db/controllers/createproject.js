const db = require('../index.js');

module.exports = {
  createProject: {
    post: (req, res) => {
      const project = {
        name: req.body.name,
        headquarters: req.body.headquarters,
        description: req.body.description,
        imageurl: req.body.imageurl,
        techstack: req.body.techstack,
        websites: req.body.websites,
        status: 'active',
      };

      const email = req.body.email;
      let userId;

      db.users.findOne({ where: { email } })
        .then((body) => {
          userId = body.id;
        })
        .catch((err) => {
          throw err;
        });

      db.projects.create(project)
        .then((body) => {
          const projUser = {
            projectId: body.dataValues.id,
            userId,
          };
          db.projectsusers.create(projUser);
          res.send(body);
        })
        .catch((err) => {
          throw err;
        });
    },
  },
};
