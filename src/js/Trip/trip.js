const Joi = require("joi");
const mongoose = require("mongoose");
const Article = require("../Clothing/article");
const Schema = mongoose.Schema;

const tripSchema = new mongoose.Schema({
    location: {
        type: String,
        required: true
    },
    checkIn: {
        type: String,
        required: true
    },
    checkOut: {
        type: String,
        required: true
    },
    owner: { // Dont validate for owner
        type: String,
        required: true
    },
    articles: [{type: String}], // Array of ids to articles
    outfits: [{
        date: {
            type: String,
            required: true
        },
        pieces: [{
            type: String // Array of ids to articles
        }]
    }]
});

const Trip = mongoose.model('Trip', tripSchema);

function validateTrip(trip) {
    const schema = {
        location: Joi.string().required(),
        checkIn: Joi.string().required(),
        checkOut: Joi.string().required()
    };

    // return Joi.validate(trip, schema);
    return true;
};


exports.Trip = Trip;
exports.validateTrip  = validateTrip;