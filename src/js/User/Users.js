const auth = require('../../../middleware/auth');
const _ = require('lodash');
const bcrypt = require('bcrypt');
const config = require('config');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const express = require('express');
const { User, validate } = require('./user');

const router = express.Router();

router.get('/me', auth, async (req, res) => {
    var token = req.get('x-auth-token');
    if (!token) return res.status(400).send("Uh Oh! You dont have a token!");

    token = jwt.decode(token);
    
    const user = await User.findById(token._id).select('-password');
    if (!user) return res.status(400).send("Uh Oh! You dont exist!");
    res.send(user);
});

router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    
    let user = await User.findOne( { email: req.body.email });
    if (user) return res.status(400).send("User already exists");
    
    user = new User(_.pick(req.body, ['username', 'email', 'password', 'gender']));
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt)
    await user.save();

    console.log(`Created user: ${JSON.stringify(_.pick(user, ['username', 'email', 'gender' ]))} From: ${req.connection.remoteAddress}`);

    const token = user.generateAuthToken();
    res.header('x-auth-token', token).send(_.pick(user, ['_id', 'username', 'email']));
});

module.exports = router;