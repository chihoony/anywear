// server.js
// load the things we need
var config = require('config');
var authAccess = require('./middleware/auth');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var nodemon = require('nodemon');
var path = require('path');
var users = require('./src/js/User/users');
var mongoose = require('mongoose');
const auth = require('./src/js/User/auth');
const trips = require('./src/js/Trip/trips');
const articles = require('./src/js/Clothing/articles');
const printToConsole = require('./middleware/printToConsole');

var urlencodedParser = bodyParser.urlencoded({ extended: true});
require('console-stamp')(console,
  {
    colors: {
      stamp: 'yellow'
    }
  });

if (!config.get('jwtKey')){
  console.log("FATAL ERROR: jwtKey is not defined");
  process.exit(1);
}

// Starting database connection
mongoose.connect('mongodb://localhost/anywear')
  .then(() => console.log("Connected to mongo...\n"))
  .catch(err => console.log("Failed connection to mongo ", err));

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

// API handlers
app.use('/api/users', users);
app.use('/api/auth', printToConsole, auth);
app.use('/api/trips', trips);
app.use('/api/articles', articles);

// use res.render to load up an ejs view file

// currenttrip page
app.get('/current', function(req, res) {
  res.render('pages/currenttrip');
})


// profile page
app.get('/profile', function(req, res) {
  res.render('pages/profile');
})

// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
})

// trips page
app.get('/alltrips', function(req, res) {
  res.render('pages/trips');
})
// trip page
app.get('/trip', function(req, res) {
  res.render('pages/trip');
})

// calendar page
app.get('/calendar', function(req, res) {
  res.render('pages/calendar');
})

// welcome page
app.get('/', function(req, res) {

  res.render('pages/welcome');
})

// register page
app.get('/register', function(req, res) {
  res.render('pages/register');
})

// login page TODO FOR TESTING
app.get('/login', function(req, res) {

  res.render('pages/login');
})

// create a trip page
app.get('/createtrip', function(req, res) {
  res.render('pages/createtrip');
})

app.post('/createtrip', urlencodedParser, function(req, res) {
  var data = {data: req.body};
  console.log(data);
  res.render('pages/currenttrip', data);
})

// serving up public files
app.use('/src', express.static('src'));

// start the server
app.listen(8000);
console.log('8000 is the magic port');
