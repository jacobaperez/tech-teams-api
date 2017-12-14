const router = require('express').Router();
const search = require('../db/controllers/search.js');
const createProject = require('../db/controllers/createproject.js');
const notification = require('../db/controllers/notification.js');
const profile = require('../db/controllers/profile.js');
const signup = require('../db/controllers/signup.js');


router.route('/projectsearch')
  .post(search.projectSearch);

router.route('/usersearch')
  .post(search.userSearch);

router.route('/createproject')
  .post(createProject.createProject.post);

router.route('/notification')
  .post(notification.notifications.post);

router.route('/profile')
  .get(profile.get);

router.route('/updateprofile')
  .post(profile.update);

router.route('/signup')
  .post(signup.post);

router.route('/login')
  .post();
  // add authUser

module.exports = router;
