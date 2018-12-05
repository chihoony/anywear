/**
* Users.js
*
* Backend server code that handles anything pertaining to a users requests.
*/
const auth = require('../../../middleware/auth');
const _ = require('lodash');
const bcrypt = require('bcrypt');
const config = require('config');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const express = require('express');
const { User, validate } = require('./user');


// Multer package handles image file using dataforms.
const multer = require('multer');
var tempToken;
// Setting how image files will be saved in using Multer.
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    // cb(null, './public/img/uploads/');
    cb(null, './uploads/');

  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + file.originalname);
    // cb(null, file.originalname);
    // cb(null, 'default.png');
  }
})
const upload = multer({storage: storage}).single('profileImg');

const router = express.Router();

// Gets a user following proper validation. User must be in the database to retrieve.
router.get('/me', auth, async (req, res) => {
    var token = req.get('x-auth-token');
    if (!token) return res.status(400).send("Uh Oh! You dont have a token!");
    token = jwt.decode(token);

    console.log(`Request for me from user ${token._id} at ${req.connection.remoteAddress}`)

    const user = await User.findById(token._id).select('-password');
    if (!user) return res.status(400).send("Uh Oh! You dont exist!");
    console.log(`Returning user ${user._id} to ${req.connection.remoteAddress}`)
    res.send({user});

});

// Posting a new user that signs up. They must have all required fields.
router.post('/', async (req, res ) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne( { email: req.body.email });
    if (user) return res.status(400).send("User already exists");

    user = new User(_.pick(req.body, ['username', 'email', 'password', 'gender']));
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt)
    await user.save();

    console.log(`Created user: ${JSON.stringify(_.pick(user, ['username', 'email', 'gender']))} From: ${req.connection.remoteAddress}`);

    const token = user.generateAuthToken();
    tempToken = token;
    res.header('x-auth-token', token).send(_.pick(user, ['_id', 'username', 'email']));
});

// Putting a new profile image after validation occurs.
router.put('/setProfileImg', upload, async (req, res) => {
  // var token = req.get('x-auth-token');
  // if (!req.file) return res.status(400).send(error.details[0].message);
  // token = jwt.decode(token);
  token = jwt.decode(tempToken);
  var user = await User.findById(token._id);
  user.profilePic = req.file.path;
  console.log(req.file.path);
  await user.save();
  console.log("User's Image : " + user.profilePic);
  res.send("Image set");
});


module.exports = router;
