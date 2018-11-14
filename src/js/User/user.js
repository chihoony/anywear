const joi = require("joi");
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
            type: email,
            required: true,
            unique: true,
            maxlength: 50
        },

        password: {
            type: String,
            required: true,
            unique: true,
            minlength: 8,
            maxlength: 1024
        }
    }
));

function validateUser(user) {
    const schema = { 
        name: joi.string().min(5).max(15).required().unique(),
        email: joi.string().max(50).required().email().unique(),
        password: joi.string().min(8).max(20).required()
    };

    return joi.validate(user, schema);
}

exports.User = User;
exports.validate = validateUser;
