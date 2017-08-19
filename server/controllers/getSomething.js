module.exports = function (req, res, next) {
  var data = req.query;
  data.method = 'get';

  res.resolve(data)
};