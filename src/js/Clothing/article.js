const Joi = require("joi");
const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
    category: { // Foreign key to category
        type: String,
        required: true
    }
});

const Article = mongoose.model('Article', articleSchema);

function validateArticle(article) {
    const schema =  {
        category: Joi.string().required()
    };

    return Joi.validate(article, schema);
};

exports.Article = Article;
exports.validateArticle = validateArticle;