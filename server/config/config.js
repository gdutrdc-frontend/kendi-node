var path = require('path');

//开发者模式
this.devMode = true;

//http监听地址
this.httpAddress = '127.0.0.1';

//http监听端口
this.httpPort = 80;

//http管理端口
this.httpAdminPort = 12701;

this.alphaFile = undefined;

//logger
this.logger = {
    logLevel: {'debug': 10, 'info': 20, 'warn': 30, 'error': 40, 'off': 50}['debug']
};

//用来清缓存
this.seajsRoot = '/node_modules/';

//cpu分配
this.runAtThisCpu = [0, 1];

// //mod_act映射
this.modAct = require('./mod-act.js');

// //模块映射
this.modMap = require('./mod-map.js');

// //
// this.mailTo = "winchang";
// this.mailCC = "winchang";

// //
// this.mailARS  = "wrenzhang;jameszuo;g_VAS_FuncDev_web_game;"
