// server.js
// load the things we need
var config = require('config');
var authAccess = require('./middleware/auth');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var nodemon = require('nodemon');
var users = require('./src/js/User/users');
var mongoose = require('mongoose');
const auth = require('./src/js/User/auth');

var urlencodedParser = bodyParser.urlencoded({ extended: false});

if (!config.get('jwtKey')){
  console.log("FATAL ERROR: jwtKey is not defined");
  process.exit(1);
}

// Starting database connection
mongoose.connect('mongodb://localhost/anywear')
  .then(() => console.log("Connected to mongo..."))
  .catch(err => console.log("Failed connection to mongo ", err));

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(bodyParser.json());

// API handlers
app.use('/api/users', users);
app.use('/api/auth', auth);

// use res.render to load up an ejs view file

// currenttrip page
app.get('/', authAccess, function(req, res) {
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
app.get('/trips', function(req, res) {
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
app.get('/welcome', function(req, res) {
  res.render('pages/welcome');
})

// register page
app.get('/register', function(req, res) {
  res.render('pages/register');
})

// login page
app.get('/login', function(req, res) {
  res.render('pages/login');
})

// create a trip page
app.get('/createtrip', function(req, res) {
  res.render('pages/createtrip');
})

app.post('/createtrip', urlencodedParser,function(req, res) {
  console.log(req.body);
  console.log(req.body.destination);
  res.render('pages/currenttrip', {data: req.body});
})

// serving up public files
app.use('/src', express.static('src'));

// start the server
app.listen(8000);
console.log('8000 is the magic port');
