var express = require("express");
var mongoose=require("mongoose");

//Mongoose connection to mongodb
mongoose.connect('mongodb://localhost/laptopSales');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  
});

//User Schema
var Schema=mongoose.Schema;
exports.user_schema=new Schema({
  first_name: String,
  last_name: String,
  email: {type: String, unique:true},
  password: String,
  phone: Number,
  created_on: { type: Date, default: Date.now }
});

