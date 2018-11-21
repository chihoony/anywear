const _ = require('lodash');
var authAccess = require('../../../middleware/auth');
const express = require('express');
const jwt = require('jsonwebtoken');
const { Trip, validateTrip } = require('./trip');

const router = express.Router();

router.post('/', authAccess, async (req, res) => {
    const { error } = validateTrip(req.body);
    if (error) return res.status(400).send("Invalid trip body");

    let token = req.header('x-auth-token');
    token = jwt.decode(token);

    let trip = new Trip(_.pick(req.body, ['location', 'checkIn', 'checkOut', 'outfits', 'articles']));
    trip.owner = token._id;

    await trip.save();

    res.send(trip);
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

router.get('/:trip', authAccess, async (req, res) => {
    
});


// Switching articles of clothing in a trip
router.put('/wardrobe/?:oldArticle&:newArticle', authAccess, async (req, res) => {
    const error = validateTrip(req.body);
    // if (error) return res.status(400).send("Invalid trip body");
    
    const { _id } = _.pick(req.body, ['_id']);

    let trip = await Trip.findById( { _id } );
    if (!trip) return res.status(400).send("Invalid trip id");

    let oldArticle = req.params.oldArticle; 
    let newArticle = req.params.newArticle; 

    var articleIndex = -1;
    await trip.articles.find(function(articleHolder, index) {
        if (articleHolder === oldArticle)
            return articleIndex = index;
    });
    if (articleIndex < 0) return res.status(400).send("No Article of that id exists");

    trip.articles[articleIndex] = newArticle;
    trip.markModified("articles");
    trip.save(function(error){
        if (error)
            console.log("Error saving trip: " + error);
    });

    res.send(trip.articles);
});



module.exports = router;