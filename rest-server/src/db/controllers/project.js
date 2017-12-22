const db = require('../index.js');

module.exports = {
  createProject: (req, res) => {
    const project = {
      name: req.body.name,
      headquarters: req.body.headquarters,
      description: req.body.description,
      imageurl: req.body.imageurl,
      techstack: req.body.techstack,
      websites: req.body.websites,
      status: 'active',
      user: req.body.user,
    };

    db.projects.create(project)
      .then(body => {
        res.send(body)})
      .catch(err => {
        throw err;
      });
  },

  updateProject: (req, res) => {
    const project = {
      name: req.body.name,
      headquarters: req.body.headquarters,
      description: req.body.description,
      imageurl: req.body.imageurl,
      techstack: req.body.techstack,
      websites: req.body.websites,
      status: req.body.status,
      user: req.body.user,
    };

    db.projects.update(project, { where: { name: name } })
      .catch(err => {
        throw err;
      });
  },

  getProject: (req, res) => {
    const name = req.body.name;

    db.projects.findOne({ where: { name: name} })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        throw err;
      })
  }
}
