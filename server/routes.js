module.exports = [
  // 前置中间件
  'get /*.html => addMqqParams',  // 增加mqq公参

  // 页面路由
  'get /home => home',  // 首页

  // 接口路由
  'post /api/postSomething => postSomething',
  'get /api/getSomething => getSomething',

  // core
  'get /(:page).html => render',  // 页面渲染逻辑
];