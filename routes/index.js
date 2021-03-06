var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home Page' });
});

/* GET About Us page. */
router.get('/aboutus', function(req, res, next) {
  res.render('aboutus', { title: 'About Us' });
});

/* GET Our Services page. */
router.get('/ourservices', function(req, res, next) {
  res.render('ourservices', { title: 'Our Services' });
});

/* GET Items page. */
router.get('/items', 
  function(req, res, next) {
  var aItems = [ { id:'-', title:'ERROR' } ];

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'bcard'
});

connection.connect();

connection.query('SELECT * FROM items', function(err, rows, fields) {
  if (err) 
    { res.render('items', { title: 'ERROR', items: aItems } ); }
  else
    {
     console.log("ROWS:" + rows);
/*
     for( var i = 0 ; i < rows.length ; i++ )
       {
        console.log( "HERE" );
        aItems[i].id = rows[0].id;
        aItems[i].title = rows[0].title;
       }
*/
     res.render('items', { title: 'Items', items: rows } );
    }
});

connection.end();

});


module.exports = router;
