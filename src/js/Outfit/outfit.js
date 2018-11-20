const Joi = require("joi");
const mongoose = require("mongoose");

const outfitSchema = new mongoose.Schema({

});

const Outfit = mongoose.model('Outfit', outfitSchema);

function validateOutfit(outfit) {
    const schema = {
    };

    return Joi.validate(outfit, schema);
};


exports.Outfit = Outfit;
exports.validateOutfit = validateOutfit;