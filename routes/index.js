var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home Page' });
});

/* GET home page. */
router.get('/aboutus', function(req, res, next) {
  res.render('aboutus', { title: 'About Us' });
});

module.exports = router;
