const Joi = require("joi");
const mongoose = require("mongoose");

const User = mongoose.model('User', new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            minlength: 5,
            maxlength: 15
        },

        email: {
            type: String,
            required: true,
            unique: true,
            maxlength: 50
        },

        password: {
            type: String,
            required: true,
            minlength: 8,
            maxlength: 1024
        }
    }
));

function validateUser(user) {
    const schema = { 
        username: Joi.string().min(5).max(15).required(),
        email: Joi.string().max(50).required().email(),
        password: Joi.string().min(8).max(20).required()
    };

    return Joi.validate(user, schema);
}

exports.User = User;
exports.validate = validateUser;
