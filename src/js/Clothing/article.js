const Joi = require("joi");
const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
    category: { // Foreign key to category
        type: String,
        required: true
    },
    tone: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true
    },
    imgLink: {
        type: String
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