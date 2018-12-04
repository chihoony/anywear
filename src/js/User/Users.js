const auth = require('../../../middleware/auth');
const _ = require('lodash');
const bcrypt = require('bcrypt');
const config = require('config');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const express = require('express');
const { User, validate } = require('./user');

const multer = require('multer');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  }
});

const upload = multer({storage: storage});

const router = express.Router();

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
    res.header('x-auth-token', token).send(_.pick(user, ['_id', 'username', 'email']));
});

// Not posting the image. Client side is not able to call this.
// req is consistently undefined when running from browser.
// post works with postman.
router.put('/setProfileImg', upload.single('profileImg'), async (req, res) => {
  console.log("Putting the image : " + req.file);
  console.log(req.file.path);
  var token = req.get('x-auth-token');

  if (!req.file) return res.status(400).send(error.details[0].message);
  console.log("hello");
  // I want it to set it to the database the path to a user.
  token = jwt.decode(token);
  var user = await User.findById(token._id);
  user.profileImg = req.file.path;
  console.log(req.file.path);
  await user.save();
  console.log("User's Image : " + user.profileImg);
  res.send("Image set");
});


module.exports = router;
