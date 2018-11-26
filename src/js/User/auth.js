const Joi = require('joi');
const _ = require('lodash');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const express = require('express');
const { User } = require('./user');

const router = express.Router();

router.post('/', async (req, res) => {
console.log(req.body);

    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne( { email: req.body.email });
    if (!user) {
        console.log(`Invalid login from: ${req.connection.remoteAddress} user: ${req.body.email}`); 
        return res.status(400).send("Invalid email or password.");
    }

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword){
        console.log(`Invalid login from: ${req.connection.remoteAddress} user: ${req.body.email}`); 
        return res.status(400).send("Invalid email or password.");
    }

    // req.connection.remoteAddress will return ::1 if logging in from localhost
    console.log(`Valid login from: ${req.connection.remoteAddress} user: ${req.body.email}`); 

    const token = user.generateAuthToken();
    res.send({
        "success": true,
        "token": token,
    });
});

function validate(req) {
    const schema = {
        email: Joi.string().max(50).required().email(),
        password: Joi.string().min(8).max(20).required()
    };

    return Joi.validate(req, schema);
}

module.exports = router;
