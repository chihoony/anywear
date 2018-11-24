const Joi = require('joi');
const _ = require('lodash');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const express = require('express');
const { User } = require('./user');
var bodyParser = require('body-parser');


const router = express.Router();

var urlencodedParser = bodyParser.urlencoded({ extended: false});
var jsonParser = bodyParser.json();

router.post('/', urlencodedParser, async (req, res) => {
    console.log(JSON.stringify(req.body));

    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne( { email: req.body.email });
    if (!user) return res.status(400).send("Invalid email or password.");

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send("Invalid email or password.");

    const token = user.generateAuthToken();
    res.send(token);
});

function validate(req) {
    const schema = {
        email: Joi.string().max(50).required().email(),
        password: Joi.string().min(8).max(20).required()
    };

    return Joi.validate(req, schema);
}

module.exports = router;