var express = require("express");
var db = require('../db/db');
var mongoose = require('mongoose');

//schema
var user_schema=db.user_schema;

//Model Definition
var User=mongoose.model('users', user_schema);
var name = new User({first_name: 'Kevin'});

//saving data to db
name.save(function(err, name){
  if(err) return console.error(err);
  else console.log('Saved');
});

//module.exports = model;