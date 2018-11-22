const _ = require('lodash');
var authAccess = require('../../../middleware/auth');
const express = require('express');
const jsw = require('jsonwebtoken');
const { Article, validateArticle } = require('./article');

const router = express.Router();

router.post('/', authAccess, async (req, res) => {
    const { error } = validateArticle(req.body);
    if (error) return res.status(400).send("Invalid Request Body!")

    let article = new Article(_.pick(req.body, ['category', 'tone', 'color', 'imgLink']));
    await article.save(function(error){
        if (error)
            return res.send("Failed to save article! " + error);
    });

    res.send(article)
});

router.get('/:articleID', authAccess, async (req, res) => {
    const articleID = req.params.articleID;
    if (!articleID) return res.status(400).send("Invalid Request!");

    if (!articleID.match(/^[0-9a-fA-F]{24}$/))
        return res.status(400).send("Invalid object ID");

    let articleFound = await Article.findById(articleID);
    if (!articleFound) return res.status(400).send("Unable to find article!");

    res.send(articleFound);
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
 * @returns array of articles, if no related artiles found returns ""
 */
router.get('/related/:articleID?&:tripID?', authAccess, async (req, res) => {
    let articleID = req.params.articleID;
    let tripID = req.params.tripID;

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

    let relatedArticles = await Article.find({ category: baseArticle.category, tone: baseArticle.tone });
        if(!relatedArticles) return res.status(400).send("")

    //-----
    // Logic to check for articles already in the trip
    //-----

    res.send(relatedArticles);
});

module.exports = router;
