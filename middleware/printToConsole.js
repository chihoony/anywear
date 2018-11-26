module.exports = function(req, res, next) {
    console.log(`Type: ${req.method}\n`
              + `req headers>>>>> ${JSON.stringify(req.headers, undefined, 2)}\n`
              + `req body>>>>>>>> ${JSON.stringify(req.body, undefined, 2)}\n`
              );
    next();
}