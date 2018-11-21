const Joi = require("joi");
const mongoose = require("mongoose");
const config = require('config');
const jwt = require('jsonwebtoken');

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
            minlength: 3,
            maxlength: 3
        },
        dob: Date,
    }
);

userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ _id: this._id }, config.get('jwtKey'));
    return token;
}

const User = mongoose.model('User', userSchema);

function validateUser(user) {
    const schema = { 
        username: Joi.string().min(5).max(15).required(),
        email: Joi.string().max(50).required().email(),
        password: Joi.string().min(8).max(20).required(),
        gender: Joi.string().min(3).min(3)
    };

    return Joi.validate(user, schema);
}

exports.User = User;
exports.validate = validateUser;
