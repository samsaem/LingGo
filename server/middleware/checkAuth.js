// ensure that user won't have access to internal feature if not logged in

exports.isLoggedIn = function (req, res, next) {
    if (req.user) {
        next();
    } else {
        return res.status(401).send('Access Denied');
    }
}