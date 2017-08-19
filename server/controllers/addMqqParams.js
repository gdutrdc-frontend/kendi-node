module.exports = function (req, res, next) {
    var mqqParams = {};
    var query = req.query;

    req.mqqParams = { mqq: 1 };

    next();
};