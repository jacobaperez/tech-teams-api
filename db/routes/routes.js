const router = require('express').Router();
const search = require('../controllers/search.js');

router.route('/psearch')
  .post(search.projectSearch);

router.route('/usearch')
  .post(search.userSearch);

module.exports = router;
