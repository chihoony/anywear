/**
* user.js
*
* Backend server code that handles a user schema and does backend
* validating after front end validation.
*/
const Joi = require("joi");
const mongoose = require("mongoose");
const config = require('config');
const jwt = require('jsonwebtoken');

// Schema for a valid user
const userSchema = new mongoose.Schema(
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
        },
        gender: {
            type: String,
            required: true,
            maxlength: 1
        },
        dob: Date,
        age: String,
        profilePic: String
    }
);

userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ _id: this._id }, config.get('jwtKey'));
    return token;
}

const User = mongoose.model('User', userSchema);

// Validates if the user object follows validation rules.
function validateUser(user) {
    const schema = {
        username: Joi.string().min(5).max(15).required(),
        email: Joi.string().max(50).required().email(),
        password: Joi.string().min(8).max(20).required(),
        gender: Joi.string().max(1).required()
    };

    return Joi.validate(user, schema);
}

exports.User = User;
exports.validate = validateUser;
