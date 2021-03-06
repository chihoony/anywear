/**
* articles.js
*
* Backend server code that handles anything pertaining to a articles requests.
*/
const _ = require('lodash');
var authAccess = require('../../../middleware/auth');
const express = require('express');
const jsw = require('jsonwebtoken');
const { Article, validateArticle } = require('./article');

const router = express.Router();

/**
 POST creating new article
 EXAMPLE POST BODY:
    {
        "season": "0",
        "temp": "15",
        "category": "shirt",
        "waterproof": "0",
        "tone": "0",
        "color": "blue",
        "gender": "f",
        "imgLink": "something.png"
    }

 Resonds with "Failed to save article!" or the new article if successful
*/
router.post('/', authAccess, async (req, res) => {
    const { error } = validateArticle(req.body);
    if (error) return res.status(400).send("Invalid Request Body!")

    console.log(`Creating new article from ${req.connection.remoteAddress}`)

    let article = new Article(_.pick(req.body, ['season', 'temp', 'category', 'waterproof', 'tone', 'color', 'gender', 'imgLink']));
    await article.save(function(error){
        if (error)
            return res.send("Failed to save article! " + error);
    });
    res.send(article)
});

/**
 * GETS a article at the specified 'articleID' param
 *
 * Responds with article object
 */
router.get('/:articleID', authAccess, async (req, res) => {
    const articleID = req.params.articleID;
    if (!articleID) return res.status(400).send("Invalid Request!");

    if (!articleID.match(/^[0-9a-fA-F]{24}$/))
        return res.status(400).send("Invalid object ID");

    console.log(`Getting article ${req.params.articleID} from ${req.connection.remoteAddress}`)

    let articleFound = await Article.findById(articleID);
    if (!articleFound) return res.status(400).send("Unable to find article!");

    res.send(articleFound);
});

/**
 * This api call get articles(clothing) based on two queries,
 * First: category=[category] (shirt, jacket, etc...)
 * Second: trip=[tripID] used to grab clothing of the [category] and are part of the trip.
 * If the trip is unused, it will return all trips of that category type.
 * If both query values are empty, it will return all clothing.
 */
router.get('/', authAccess, async (req, res) => {
    console.log(req.query.category);

    let articles = await Article.find({ category: req.query.category })
    if (!articles) return res.status(400).send("Unable to find articles!");

    res.send(articles);
});

/**
 * This endpoint takes an id from a trip and an id from an article,
 * it then grabs all articles from the database that match that articles
 * type (category, color, tone, weather), it then filters out articles that
 * the trip already contains
 *
 * If no trip id is given, it wont filter out articles already contained
 * in a trip
 *
 * @returns array of articles, if no related articles found returns ""
 */
router.get('/related/:articleID?&:tripID?', authAccess, async (req, res) => {
    let articleID = req.params.articleID;
    let tripID = req.params.tripID;

    console.log(`request for articles related to ${req.params.articleID} from ${req.connection.remoteAddress} with trip ${req.params.tripID}`);

    if (!articleID.match(/^[0-9a-fA-F]{24}$/))
        return res.status(400).send("Invalid article ID!");

    var filterTrip = false;
    if (tripID.match(/^[0-9a-fA-F]{24}$/))
        filterTrip = true;

    if (filterTrip) {
        let trip = await Trip.findById(tripID);
        if (!trip) return res.status(400).send("No trip at that ID!")
    }

    let baseArticle = await Article.findById(articleID);
        if(!baseArticle) return res.status(400).send("No article exists at that id")

    let relatedArticles = await Article.find({ category: baseArticle.category, tone: baseArticle.tone, gender: baseArticle.gender });
        if(!relatedArticles) return res.status(400).send("")

    //-----
    // Logic to check for articles already in the trip
    //-----

    res.send(relatedArticles);
});

module.exports = router;
