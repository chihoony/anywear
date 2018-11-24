const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next) {
    const token = req.header('x-auth-token');
    if (!token) return res.status(401).send('hmmmm... Where is your token?');

    try {
    const decode = jwt.verify(token, config.get('jwtKey'));
    req.user = decode;
    next();
    }
    catch (ex) {
        return res.status(400).send('WRONG! That\'s not a valid token!');
    }
}
