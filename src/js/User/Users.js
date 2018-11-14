const _ = require('lodash');
const mongoose = require('mongoose');
const express = require('express');
const { User, validate } = require('./user');

const router = express.Router();

router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send("Invalid User");

    let user = await User.findOne( { email: req.body.email });
    if (user) return res.status(400).send("User already exists");

    await user.save();
    res.send(_.pick(user, ['name', 'email']));
});

module.exports = users;