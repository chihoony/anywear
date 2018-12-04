const Joi = require('joi');
const _ = require('lodash');
const bcrypt = require('bcrypt');
const express = require('express');
const { User } = require('./user');

const router = express.Router();
// Authorizing a user if it is a valid user given the token.
router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    console.log(`Login request from: ${req.connection.remoteAddress} user: ${req.body.email}`);

    let user = await User.findOne( { email: req.body.email });
    if (!user) {
    // req.connection.remoteAddress will return ::1 if logging in from localhost
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

//  Validates if the input is correct before authorizing function
function validate(req) {
    const schema = {
        email: Joi.string().max(50).required().email(),
        password: Joi.string().min(8).max(20).required()
    };

    return Joi.validate(req, schema);
}

module.exports = router;
