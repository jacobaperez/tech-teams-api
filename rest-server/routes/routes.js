const router = require('express').Router();
const search = require('../controllers/search.js');
const createProject = require('../controllers/createproject.js');
const notification = require('../controllers/notification.js');
const profile = require('../controllers/profile.js');
const signup = require('../controllers/signup.js');

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

router.route('signup')
  .post(signup.post);

module.exports = router;
