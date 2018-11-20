const _ = require('lodash');
var authAccess = require('../../../middleware/auth');
const express = require('express');
const jsw = require('jsonwebtoken');
const { Article, validateArticle } = require('./article');

const router = express.Router();

router.post('/', authAccess, async (req, res) => {
    const { error } = validateArticle(req.body);
    if (error) return res.status(400).send("Invalid Request Body")

    // Insert Logic Here
});

router.get('/', authAccess, async (req, res) => {
    const articleID = req.params.id;
    if (!articleID) return res.status(400).send("Invalid Request");

    // Insert Logic Here
});

module.exports = router;
