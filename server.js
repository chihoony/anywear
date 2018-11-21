// server.js
// load the things we need
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var nodemon = require('nodemon');
var path = require('path');

var urlencodedParser = bodyParser.urlencoded({ extended: false});

// set the view engine to ejs
app.set('view engine', 'ejs');

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
  var data = {
    data: {
      tripKey: 1234,
      checkin: "date 1",
      checkout: "date 1.5",
      destination: "Japan"
    }
  }

  res.render('pages/trips', data);
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
