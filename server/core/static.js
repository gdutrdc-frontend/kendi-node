/**
 * author: gisonyeung(gisonyang)
 * date:   2017/08/18   
 */


'use strict';

var express = require('express'),
  app = require('./index'),
  conf = require('../conf');

module.exports = function (dir) {
  dir = dir || '/static';
  return express.static(app.get('root'), {
    maxAge: Infinity,
  });
};