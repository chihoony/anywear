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

    let trip = new Trip(_.pick(req.body, ['city', 'countryCode', 'countryName',
                                 'checkIn', 'checkOut', 'outfits', 'articles', 'bagSize']));
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

router.get('/onTrip', async (req, res) => {
    let token = req.get('x-auth-token');
    token = jwt.decode(token);

    var trips = Trip.find({owner: token._id});

    // TODO: check if the current user has a trip

    const onTrip = true;
    const tripID = "Eventually be the current trip id, empty if not on a trip"

    res.send({ onTrip: onTrip, tripID: tripID });
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
    res.send({ trip: trip[0] });  
});

router.get('/wardrobe/outfits/:tripID', authAccess, async (req, res) => {
    let token = req.get('x-auth-token');
    token = jwt.decode(token);

    if (!req.params.tripID.match(/^[0-9a-fA-F]{24}$/))
        return res.status(400).send("Invalid object ID");

    let trip = await Trip.find({ owner: token._id, _id: req.params.tripID });
    if (!trip || trip.length <= 0) return res.status(400).send("Unable to find that trip");
    trip = trip[0];

    const tripOutfits = trip.outfits;

    if (!tripOutfits.length) {
        return res.status(400).send("go make some outfits");
        // Build some outfits
    }
    
    
    let buildingOutfits = new Promise((resolve, reject) => {
        let outfits = [];
        let outfitPromises;

        outfitPromises = new Promise((resolve, reject) => {
            tripOutfits.forEach( async (outfit, index, array) => {
                let newOutfit = { date: outfit.date, pieces: [] };
                let piecePromises; 

                piecePromises = new Promise((resolve, reject) => {
                    outfit.pieces.forEach( async (piece, index, array) => {
                    article = await Article.findById(piece);
                    newOutfit.pieces.push(article);

                    if (index == array.length - 1) {
                      resolve();
                    }
                })});

                piecePromises.then(() => {
                    outfits.push(newOutfit);
                    resolve();
                });
        })});

        outfitPromises.then(() => {
            resolve(outfits);
        });
    });

    buildingOutfits.then((outfits) => {
        console.log(`returning ${outfits.length} outfit(s) to ${token._id} at ${req.connection.remoteAddress}`);
        res.send(outfits);
    });
});

// Get all articles on a trip, include category=[category] to get articles of that category attached to the trip
router.get('/wardrobe/:tripID', authAccess, async (req, res) => {
    if (!req.params.tripID.match(/^[0-9a-fA-F]{24}$/))
        return res.status(400).send("Invalid object ID");

    // var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl
    // console.log(fullUrl);

    let token = req.get('x-auth-token');
    token = jwt.decode(token);
    
    let trip = await Trip.find({ owner: token._id, _id: req.params.tripID });
    if (!trip || trip.length <= 0) return res.status(400).send("You have no trips! Go on a trip!\n");
    
    trip = trip[0];
    
    console.log(`request for articles on trip ${trip._id} from ${req.connection.remoteAddress} with filter ${req.query.category}`);

    if (trip.articles.length <= 0) {
        console.log(`No articles with trip ${trip._id}`);
        return res.status(404).send("No Articles found");
    }

    var filterByCategory = false;
    if (req.query.category) {
        filterByCategory = true;
    }

    var articles = [];

    // Only used if sorting by category
    var potentialAmount = trip.articles.length;

    var searchForArticles = new Promise((resolve) => {
        trip.articles.forEach( async (articleID, undefined, array) => {
            if (filterByCategory){
                var article = await Article.find({ _id: articleID, category: req.query.category });
            } else {
                var article = await Article.find({ _id: articleID });
            }

            var category = _.pick(article[0], ['category']).category;

            console.log(`${category} == ${req.query.category}`);
            if (category != req.query.category) {
                potentialAmount--;
            } else if (articles) {
                articles.push(article[0]);
            }

            if (potentialAmount === articles.length) {
                console.log("yayay");
                resolve()
            }
        });
    });

    searchForArticles.then(function() {
        if (articles.length <= 0) {
            console.log(`No articles found`);
            return res.status(404).send(`No articles found`);
        }

        console.log(`Sending ${articles.length} articles to ${req.connection.remoteAddress} with filter ${req.query.category}\n`);
        res.send({ articles: articles });
    });

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
