var dummy_data = require('../dymmy_path/data.json');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/data', function(req, res, next) {
  res.json(dummy_data);
});


module.exports = router;
