const Joi = require("joi");
const mongoose = require("mongoose");
const _ = require('lodash');

const tripSchema = new mongoose.Schema({
    city: {
        type: String,
        required: true
    },
    countryCode: {
        type: String,
    },
    countryName: {
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
    bagSize: {
        type: String,
        require: true
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
console.log(trip);

    const schema = {
        city: Joi.string().required(),
        countryName: Joi.string().required(),
        checkIn: Joi.string().required(),
        checkOut: Joi.string().required(),
        bagSize: Joi.string().required()
    };

    return Joi.validate(_.pick(trip, ['city', 'countryName', 'checkIn', 'checkOut', 'bagSize']), schema);
};


exports.Trip = Trip;
exports.validateTrip  = validateTrip;