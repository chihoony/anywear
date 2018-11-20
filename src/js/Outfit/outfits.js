const _ = require('lodash');
var authAccess = require('../../../middleware/auth');
const express = require('express');
const jwt = require('jsonwebtoken');
const { Outfit, validateTrip } = require('./outfit');

const router = express.Router();

router.post('/', authAccess, async (req, res) => {
    const { error } = validateOutit(req.body);
    if (error) return res.status(400).send("Invalid Request Body");

});

router.get('/', authAccess, async (req, res) => {
    let token = req.get('x-auth-token');
    if (!token) return res.status(401).send("Invalid token! No trip for you!");

});

module.exports = router;