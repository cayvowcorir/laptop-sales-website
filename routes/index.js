var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Laptop Sales Website' });
});

//Get about us page
router.get('/about', function(request, response, next){
	response.render('about',{title: 'About us page'});
	console.log(name.first_name);
});

router.get('users/new', function(req, res, next) {
  
  res.render('Register');
  console.log(req.body);
  res.end('You are about to add a user');
});

module.exports = router;
