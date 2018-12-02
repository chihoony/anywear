const jwt = require('jsonwebtoken');
const { Trip } = require('../src/js/Trip/trip');


module.exports = async function (req, res, next) {
    let token = req.header('x-auth-token');

    token = jwt.decodeToken(token);

    const trips = await Trip.find({ owner: token._id });

    
    // TODO: Logic to go through trips and find if user is on trip
    const onTrip = true;
    const tripID = "If on trip this would be my id";

    if (onTrip) {
      // TODO: warn user that they are not on a trip
      res.render('pages/trips');
    }
}