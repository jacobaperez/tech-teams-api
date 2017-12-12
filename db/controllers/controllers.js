const db = require('../index.js')

module.exports = {
  profile: {
    get: (req, res) => {
      const email = req.body.email;
      db.users.findOne({ where: { email: email } })
        .then(body => {
          res.send(body)})
        .catch(err => {
          throw err;
        });

      let userId;

      db.users.findOne(email)
        .then(body => {
          userId = body.id;})
        .catch(err => {
          throw err;
        })

      db.projectsusers.findAll({ where: { userId: userId } })
        .then(body => {
          res.send(body)})
        .catch(err => {
          throw err;
        });
    }

  },

  createProject: {
    post: (req, res) => {
      const project = {
        name: req.body.name,
        headquarters: req.body.headquarters,
        description: req.body.description,
        imageurl: req.body.imageurl,
        techstack: req.body.techstack,
        websites: req.body.websites,
        status: 'active'
      };

      const email = req.body.email;
      let userId;

      db.users.findOne(email)
        .then(body => {
          userId = body.id;})
        .catch(err => {
          throw err;
        })

      db.projects.create(project)
        .then(body => {
          const projUser = {
            projectId: body.dataValues.id,
            userId: userId,
          };
      db.projectsusers.create(projUser);
        res.send(body)})
        .catch(err => {
          throw err;
        });

  },

  projectSearch: {
    post: (req, res) => {
      const query = req.body.query;

      db.query(`select * from (
      SELECT 1 as relevance, * FROM projects
      WHERE name LIKE '%${query}%'
      union
      select 10 as relevance, * FROM projects
      WHERE name LIKE '%${query}%'
      union
      select 100 as relevance, * FROM projects
      WHERE name LIKE '%${query}%')
      order by relevance asc`, { type: db.QueryTypes.SELECT})
        .then(body => {
          res.send(body)})
        .catch(err => {
          throw err;
        });
    }
  },

  userSearch: {
    post: (req, res) => {
      const query = req.body.query;

      db.query(`select * from (
      SELECT 1 as relevance, * FROM users
      WHERE title LIKE '%${query}%'
      union
      select 10 as relevance, * FROM users
      WHERE title LIKE '%${query}%'
      union
      select 100 as relevance, * FROM users
      WHERE title LIKE '%${query}%')
      order by relevance asc`, { type: db.QueryTypes.SELECT})
        .then(body => {
          res.send(body)})
        .catch(err => {
          throw err;
        });
    }
  },

  navbarProjects: {
    post: (req, res) => {
      const email = req.body.email;
      let userId;

      db.users.findOne(email)
        .then(body => {
          userId = body.id;})
        .catch(err => {
          throw err;
        })

      db.projectsusers.findAll({ where: { userId: userId, status: 'active' } })
        .then(body => {
          res.send(body)})
        .catch(err => {
          throw err;
        });

    }
  }





}


//ADD TEAM MEMBERS FROM CREATE PROJECT
//ADD POSITION
//Notifications
//
