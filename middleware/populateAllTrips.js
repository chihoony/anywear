const jwt = require('jsonwebtoken');
const Trip = require('../src/js/Trip/trip');

module.exports = function (req, res, next){
    const token = req.header('x-auth-token');
    if (!token) return res.status(400).send("Missing token");

    const decodedToken = jwt.decodeToken(token);

    const trips = Trip.find({ _id: decodeToken._id });
    if (!trips) return res.status(404).send("invalid trip");

    res.myData.trips = trips;
    next();
}