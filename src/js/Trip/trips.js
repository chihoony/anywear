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

    const fillingArticles = fillArticles(trip);

    fillingArticles.then( async () => {
        await trip.save();
        return res.send(trip);
    });
});

// Filling trip articles
function fillArticles(trip) {
    return new Promise( async (resolve, reject) => {
      let tripSeason = getSeason(new Date(trip.date));
      let shirtArticles = await Article.find({season: tripSeason, category: 0});
      let allShirtArticles = await Article.find({season: 4, category: 0});
      console.log(shirtArticles);
      let pantArticles = await Article.find({season: tripSeason, category: 1});
      let allPantArticles = await Article.find({season: 4, category: 1});
      console.log(pantArticles);
      let jacketArticles = await Article.find({season: tripSeason, category: 2});
      let allJacketArticles = await Article.find({season: 4, category: 2});
      console.log(jacketArticles);
        // Logic for adding articles
        switch(trip.bagSize) {
          case "20-30 L":

              break;
          case "35-40 L":

              break;
          case "40-45 L":

              break;
          case "50-65 L":

              break;
          case "65-75 L":

              break;
          case "75-120 L":

              break;
          default:

            }


        // After everything has been added
        resolve();
    });
}

function getSeason(month) {
    switch(month) {
        case '12':
        case '1':
        case '2':
            return 3;
        break;
        case '3':
        case '4':
        case '5':
            return 0;
        break;
        case '6':
        case '7':
        case '8':
            return 1;
        break;
        case '9':
        case '10':
        case '11':
            return 2;
        break;
    }
}

// updates a trip
router.put('/editTrip/:id', authAccess, async (req, res) => {
  console.log("updating a trip");
    let token = req.get('x-auth-token');
    if (!token) return res.status(401).send("Invalid token! No trip for you!");

    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/))
        return res.status(400).send("Invalid object ID");

    token = jwt.decode(token);

    let trip = await Trip.find( { owner: token._id, _id: req.params.id });
    if (!trip || trip.length <= 0) return res.status(400).send("You have no trips! Go on a trip!\n");

    trip = trip[0];

    console.log(`Returning trip ${trip._id} to ${token._id} at ${req.connection.remoteAddress}`);

    trip.city = req.body.city;
    trip.countryCode = req.body.countryCode;
    trip.countryName = req.body.countryName;
    trip.checkIn = req.body.checkIn;
    trip.checkOut = req.body.checkOut;
    trip.bagSize = req.body.bagSize;

    await trip.save();

    res.status(200).send("Your trip was updated");
});
// get all the trips
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
    const tripID = "5c0478623a90610a1bd07de1";

    res.send({ onTrip: onTrip, tripID: tripID });
});

//get a single trip
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

                piecePromises = new Promise(async (resolve, reject) => {
                    for (const piece of outfit.pieces) {
                        article = await Article.findById(piece);
                        newOutfit.pieces.push(article);
                    }
                    resolve();
                });

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

            if (category != req.query.category) {
                potentialAmount--;
            } else if (articles) {
                articles.push(article[0]);
            }

            if (potentialAmount === articles.length) {
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
router.put('/wardrobe/swap/:tripID/?:oldArticle&:newArticle', authAccess, async (req, res) => {
   if (!req.params.oldArticle.match(/^[0-9a-fA-F]{24}$/))
        return res.status(400).send("Invalid object ID");
   if (!req.params.newArticle.match(/^[0-9a-fA-F]{24}$/))
        return res.status(400).send("Invalid object ID");
   if (!req.params.tripID.match(/^[0-9a-fA-F]{24}$/))
        return res.status(400).send("Invalid object ID");

    let trip = await Trip.findById(req.params.tripID);
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
