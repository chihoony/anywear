const _ = require('lodash');
var authAccess = require('../../../middleware/auth');
const express = require('express');
const jwt = require('jsonwebtoken');
const { Trip, validateTrip } = require('./trip');
const { Article } = require('../Clothing/article');
const { User, validate } = require('../User/user');
var request = require('request-promise');

const router = express.Router();

router.post('/', authAccess, async (req, res) => {
    const { error } = validateTrip(req.body);
    if (error) return res.status(400).send("Invalid trip body");

    let token = req.header('x-auth-token');
    token = jwt.decode(token);

    let user = await User.findById(token._id);
    console.log("I'm a user: " + token._id);
    let trip = new Trip(_.pick(req.body, ['city', 'countryCode', 'countryName',
                                 'checkIn', 'checkOut', 'outfits', 'articles', 'bagSize']));
    trip.owner = token._id;

    const fillingArticles = fillArticles(trip, user);

    fillingArticles.then( async () => {
        await trip.save();
        return res.send(trip);
    });
});

// Filling trip articles
function fillArticles(trip, user) {
    return new Promise( async (resolve, reject) => {
      console.log("users gender: " + user.gender);

      let tripSeason = getSeason(new Date(trip.checkIn).getMonth());

      let shirtArticles = await Article.find({season: tripSeason, category: "shirt", gender: user.gender});
      let allShirtArticles = await Article.find({season: 4, category: "shirt", gender: user.gender});
      console.log(shirtArticles);
      let pantArticles = await Article.find({season: tripSeason, category: "pant", gender: user.gender});
      let allPantArticles = await Article.find({season: 4, category: "pant", gender: user.gender});
      let combinedPantArticles = pantArticles.concat(allPantArticles);
      console.log(pantArticles);
      let jacketArticles = await Article.find({season: tripSeason, category: "jacket", gender: user.gender});
      let allJacketArticles = await Article.find({season: 4, category: "jacket", gender: user.gender});
      let combinedJacketArticles = jacketArticles.concat(allJacketArticles);

      console.log(jacketArticles);

      function populateArticles(seasonSize, clothSize, pantSize, jacketSize) {
        if (!shirtArticles || shirtArticles.length <= seasonSize) {
          let combinedShirtArticle = shirtArticles.concat(allShirtArticles);
          for (var i = 0; i < clothSize + seasonSize; i++) {
            trip.articles.push(combinedShirtArticle[Math.floor((Math.random() * combinedShirtArticle.length))]._id);
          }
        } else {
          for (var i = 0; i < seasonSize; i++) {
            trip.articles.push(shirtArticles[Math.floor((Math.random() * shirtArticles.length))]._id);

          }
          for (var i = 0; i < clothSize; i++) {
            trip.articles.push(allShirtArticles[Math.floor((Math.random() * allShirtArticles.length))]._id);
          }
        }
        for (var i = 0; i < pantSize; i++) {
          trip.articles.push(combinedPantArticles[Math.floor((Math.random() * combinedPantArticles.length))]._id);
        }
        for (var i = 0; i < jacketSize; i++) {
          trip.articles.push(combinedJacketArticles[Math.floor((Math.random() * combinedJacketArticles.length))]._id);
        }
      }


        // Logic for adding articles
        switch(trip.bagSize) {
          case "20-30 L":
              populateArticles(2,1,2,2);
              break;
          case "35-40 L":
              populateArticles(3,2,2,2);
              break;
          case "40-45 L":
              populateArticles(4,2,3,2);
              break;
          case "45-50 L":
              populateArticles(3,2,4,2);
              break;
          case "50-65 L":
              populateArticles(4,2,5,3);
              break;
          case "65-75 L":
              populateArticles(4,4,5,3);
              break;
          case "75-120 L":
              populateArticles(5,5,6,4);
              break;
          default:

            }


        // After everything has been added
        resolve();
    });
}

function getSeason(month) {
  console.log(month);
    switch(month) {
      case 12:
      case 1:
      case 2:
          return 3;
          break;
      case 3:
      case 4:
      case 5:
        return 0;
        break;
      case 6:
      case 7:
      case 8:
          return 1;
      break;
      case 9:
      case 10:
      case 11:
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

    console.log(`Checking if user ${token._id} is on a trip`);

    var trips = await Trip.find({owner: token._id});

    var currentTrip;
    for (const trip of trips) {
        if (checkIfCurrentTrip(trip)) {
            currentTrip = trip;
            break;
        }
    }

    // Generate outfits for the current trip, unless it already has outfits
    let generatingOutfits = generateOutfits(currentTrip);

    let onTrip;
    let tripID;
    if (currentTrip) {
        onTrip = true;
        tripID = currentTrip._id;
    } else {
        onTrip = false;
        tripID = "";
    }


    generatingOutfits.then(() => {
      if (currentTrip) currentTrip.save();
      
      console.log(`User ${token._id} is on trip: ${onTrip}`);
      res.send({ onTrip: onTrip, tripID: tripID });
    });
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

    let buildingOutfits = new Promise( async (resolve, reject) => {
        let outfits = [];

        for (const outfit of tripOutfits) {
            let newOutfit = { date: outfit.date, pieces: [] };

            for (const piece of outfit.pieces) {
                article = await Article.findById(piece);

                newOutfit.pieces.push(article);
            }

            outfits.push(newOutfit);
        }
        resolve(outfits);
    });

    buildingOutfits.then((outfits) => {
        console.log(`returning ${outfits.length} outfit(s) to ${token._id} at ${req.connection.remoteAddress}`);
        return res.send(outfits);
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

function generateOutfits(trip) {
    // generating outfits

    // dont generate outfits if somethings are true
    return new Promise((resolve, reject) => {
        // if (!trip || trip.outfits.length > 0 || trip.articles.length <= 0) {
        //     console.log("No generating needed");
        //     return resolve();
        // }

trip.outfits = [];

request('http://api.openweathermap.org/data/2.5/weather?q=' + trip.country + ',' + trip.countryCode 
+ '&appid=2b09f34775a0dae360c45f7f788db016' + '&units=metric').then(async body => {
    body = JSON.parse(body);
    var temp_max = body.main.temp_max;
    var temp_min = body.main.temp_min;
    var current_temp = body.main.temp;
    var weather_id = body.weather[0].id;

    var outfits = [];
    var articles = [];
    for (const articleID of trip.articles) {
        article = await Article.find({_id: articleID})
        articles.push(article);
    }
    console.log("Look I found articles " + articles);

    Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

    for (var i = 0; i <= 7; i++) {
        if (i > 2) {
            current_temp = Math.floor((Math.random() * 10)) + body.main.temp;
        } else if (i > 4) {
            current_temp = -(Math.floor((Math.random() * 10))) + body.main.temp;
        }

        console.log("temp " + current_temp);

        let outfit = { pieces: [] };

        if (i <= 2) {
            outfit['date'] = new Date();
        } else {
            outfit['date'] = new Date().addDays(i - 2);
        }

        current_temp = 5;

        // Include jacket if temp is low
        if (current_temp < 15) {
            var jackets = await articles.filter(obj => {
                return obj[0].category == 'jacket';
            });

            var jacketIndex = Math.floor(Math.random() * jackets.length);
            var useJacket = jackets[jacketIndex];

            outfit.pieces.push(useJacket[0]._id);
        }

        var bottoms = await articles.filter(obj => {
            return obj[0].category == 'pant';
        });

        var tops = await articles.filter(obj => {
            return obj[0].category == 'shirt';
        });

        var bottomIndex = Math.floor(Math.random() * bottoms.length);
        var topIndex = Math.floor(Math.random() * bottoms.length);

        var useBottom = bottoms[bottomIndex];
        var useTop = tops[topIndex];

        outfit.pieces.push(useBottom[0]._id);
        outfit.pieces.push(useTop[0]._id);

        console.log("outfit " + JSON.stringify(outfit));
        trip.outfits.push(outfit);
    }



    console.log("generated")
    return resolve();
}).catch(err => {
    console.log(err);
});
    });
}

function checkIfCurrentTrip(trip) {
    var fDate, lDate, cDate;
    fDate = Date.parse(trip.checkIn);
    lDate = Date.parse(trip.checkOut);
    cDate = Date.parse(new Date());

    if((cDate <= lDate && cDate >= fDate)) {
        return true;
    }
    return false;
}

module.exports = router;
