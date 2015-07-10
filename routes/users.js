var express = require('express');
var router = express.Router();
var model = require('../model/userModel');
var bodyParser=require('body-parser');
var app=express();

app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 


/* GET user registration form.*/ 
router.get('/new', function(req, res, next) {
  
  res.render('Register');
  console.log(req.body);

});

/*Post user registration details */
router.post('/new', function(req, res, next){
	console.log(req.body);
	res.send('you have tried to register a user');
});

exports.Create = function(req, res){
 User.create({
 name: req.body.FullName,
 email: req.body.Email,
 modifiedOn : Date.now(),
 lastLogin : Date.now()
 }, function( err, user ){
 if(!err){
 console.log("User created and saved: " + user);
 }
 });
};

module.exports = router;
