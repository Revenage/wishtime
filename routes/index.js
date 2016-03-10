var express = require('express');
var router = express.Router();
var log = require('../libs/logger')(module);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'WishTime', subtitle: 'Express' });
});

module.exports = router;
