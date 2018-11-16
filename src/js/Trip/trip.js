const Joi = require("joi");
const mongoose = require("mongoose");

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
    owner: {
        type: String,
        required: true
    }
});

const Trip = mongoose.model('Trip', tripSchema);

function validateTrip(trip) {
    const schema = {
        location: Joi.string().required(),
        checkIn: Joi.string().required(),
        checkOut: Joi.string().required()
    };

    return Joi.validate(trip, schema);
};


exports.Trip = Trip;
exports.validateTrip  = validateTrip;