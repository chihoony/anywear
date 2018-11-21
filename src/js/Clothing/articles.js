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

router.get('/related/?:articleID&:tripID', authAccess, async (req, res) => {

    if (!articleID.match(/^[0-9a-fA-F]{24}$/))
        return res.status(400).send("Invalid article ID!");
    if (!tripID.match(/^[0-9a-fA-F]{24}$/))
        return res.status(400).send("Invalid trip ID!");
    
    let trip = await Trip.findById(tripID);
    if (!trip) return res.status(400).send("No trip at that ID!")

     
});

module.exports = router;
