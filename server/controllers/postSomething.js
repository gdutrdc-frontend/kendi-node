module.exports = function (req, res, next) {
  var data = req.body;
  data.method = 'post';

  console.log('---------------------------------')
  console.log('postSomething:here')
  console.log('data:', data)
  console.log('---------------------------------')

  res.resolve(data)
};