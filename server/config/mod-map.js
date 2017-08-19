var path  = require('path'),
  url    = require('url'),
  modPath  = path.join(__dirname,'../mod-map.js'),

  i;


this.find = function(mod_act,req,res){

  // if (mod_act === 'express_page') {
    return require('../core/index.js')
  // }
  // return this.findFromMap(mod_act,req,res);
};

/**
 * 注意require写在里面是为了能清除缓存
 * @param {String} mod_act mod_act字符串
 */
this.findFromMap = function(mod_act, req, res) {
  var map = require(modPath).map;
  var mod = map[mod_act];

  if(!mod || mod_act === 'default_page') {

    mod_act = 'default_page';
    req.params.mod_act = mod_act;
    mod = map[mod_act];
  }

  if(typeof mod === 'string') {
    res.setHeader('Mod-Map', mod_act + ':' + mod);
  }
  return require(mod);
};