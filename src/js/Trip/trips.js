const _ = require('lodash');
var authAccess = require('../../../middleware/auth');
const mongoose = require('mongoose');
const express = require('express');
const config = require('config');
const jwt = require('jsonwebtoken');
const { Trip, validateTrip } = require('./trip');

const router = express.Router();

router.post('/', authAccess, async (req, res) => {
    const { error } = validateTrip(req.body);
    if (error) return res.status(400).send("nope!");

    let token = req.header('x-auth-token');
    token = jwt.decode(token);

    let trip = new Trip(_.pick(req.body, ['location', 'checkIn', 'checkOut']));
    trip.owner = token._id;

    await trip.save();

    res.send(_.pick(trip, ['location', 'checkIn', 'checkOut']));
});

router.get('/', authAccess, async (req, res) => {
    let token = req.get('x-auth-token');
    if (!token) return res.status(401).send("Invalid token! No trip for you!");

    token = jwt.decode(token);
    console.log(token._id);

    let trip = await Trip.find( { owner: token._id });
    if (!trip) return res.status(400).send("You have no trips! Go on a trip!");

    console.log(_.pick(trip[0], ['location']));
    console.log(trip.location);

    res.send(trip);
});

module.exports = router;