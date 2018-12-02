const Joi = require("joi");
const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({

    season: {
      type: String,
      required: true
    },
    temp: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    waterproof: {
      type: String,
      required: true
    },
    tone: {
      type: String,
      required: true
    },
    gender: {
      type: String,
      required: true
    },
    imgLink: {
      type: String,
    }
});

const Article = mongoose.model('Article', articleSchema);

function validateArticle(article) {
    const schema =  {
        category: Joi.string().required(),
        tone: Joi.string().required(),
        color: Joi.string().required(),
        imgLink: Joi.string()
    };

    return Joi.validate(article, schema);
};

exports.Article = Article;
exports.validateArticle = validateArticle;
