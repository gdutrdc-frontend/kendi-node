/**
 * author: gisonyeung(gisonyang)
 * date:   2017/08/18   
 */


'use strict';

var meta = require('../../package.json');
var express = require('express');
var compress = require('compression');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var path = require('path');
var app = module.exports = express();
var middleware = ['proxy', 'static'];
var routes = require('../routes');
var router = require('./router')(routes);
var conf = require('../conf');

// lazy load middlewares
middleware.forEach(function (m) {
  middleware.__defineGetter__(m, function () {
    return require('./' + m);
  });
});

process.on('uncaughtException', function (err) {
  console.log('error');
  (app.get('logger') || console).error('Uncaught exception:\n', err.stack);
  process.exit(1);
});

app.set('root', path.resolve(__dirname, '../../dist').replace(/\/+$/, ''));
app.set('logger', console);
app.enable('trust proxy');

app.use(bodyParser.json({
  limit : '50mb'
}));
app.use(bodyParser.raw({
  limit : '50mb'
}));
app.use(bodyParser.urlencoded({ limit : '50mb', extended: true }));

app.use(cookieParser());

app.use(compress());

//路由的配置
app.use(router);

app.use(middleware.static());
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
