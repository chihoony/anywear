const _ = require('lodash');
var authAccess = require('../../../middleware/auth');
const express = require('express');
const jwt = require('jsonwebtoken');
const { Trip, validateTrip } = require('./trip');
const { Article } = require('../Clothing/article');

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

    let trips = await Trip.find( { owner: token._id });
    if (!trips) return res.status(400).send("You have no trips! Go on a trip!");

    console.log(`Returning ${trips.length} trips to ${token._id} at ${req.connection.remoteAddress}`);
    res.send({ trips: trips });
});

router.get('/:id', authAccess, async (req, res) => {
    let token = req.get('x-auth-token');
    if (!token) return res.status(401).send("Invalid token! No trip for you!");

    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/))
        return res.status(400).send("Invalid object ID");

    token = jwt.decode(token);

    let trip = await Trip.find( { owner: token._id, _id: req.params.id });
    if (!trip) return res.status(400).send("You have no trips! Go on a trip!");

    console.log(`Returning trip ${trip._id} to ${token._id} at ${req.connection.remoteAddress}`);
    res.send({ trip: trip });  
});

// Get all articles on a trip, include category=[category] to get articles of that category attached to the trip
router.get('/wardrobe/:tripID', authAccess, async (req, res) => {
    if (!req.params.tripID.match(/^[0-9a-fA-F]{24}$/))
        return res.status(400).send("Invalid object ID");

    let token = req.get('x-auth-token');
    token = jwt.decode(token);

    console.log({ owner: token._id, _id: req.params.tripID });
    let trip = await Trip.find({ owner: token._id, _id: req.params.tripID });
    if (!trip || trip.length <= 0) return res.status(400).send("You have no trips! Go on a trip!");

    console.log(trip);

    trip = trip[0];

    let filterByCategory;
    if (req.query.category)
        filterByCategory = true;

    var articles = [];

    var counter = 0;
    var something = new Promise((resolve, reject) => {
        trip.articles.forEach( async (articleID, index, array) => {
            if (filterByCategory){
                var article = await Article.find({ _id: articleID, category: req.query.category }, {lean: true}, function(err, result){
                    if (err) return res.status(400).send("Unable to get articles");
                });
            }
            else
            {
                var article = await Article.find({ _id: articleID }, function(err, result){
                    if (err) return res.status(400).send("Unable to get articles");
                });
                console.log(article[0]);
            }

            if (article !== null)
                articles.push(article[0]);
            console.log("push: " + article[0]);
            console.log(articles);
            counter++;
            if (articles.length === counter){
                // finished(articles);
            }
    })});

    something.then( () => {
        res.send(articles);
    });

    function finished(articles){
        res.send(JSON.stringify(articles));
    }
});


// Switching articles of clothing in a trip
router.put('/wardrobe/swap/?:oldArticle&:newArticle', authAccess, async (req, res) => {
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


router.delete('/:id', authAccess, function (req, res) {
    const token = jwt.decode(req.get('x-auth-token'));

    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/))
        return res.status(400).send("Invalid object ID");

        Trip.find( { owner: token._id, _id: req.params.id }).remove(removeCallback);
        console.log(token._id);

        function removeCallback(err, product) {
            if (err) return res.status(400).send("Failed to remove trip");

            if (product.n === 0) res.status(400).send("Failed to remove trip");
            else{
                console.log(`User: ${token._id} removed trip: ${req.params.id}`);
                res.send("Removed trip");
            }
        }
});



module.exports = router;