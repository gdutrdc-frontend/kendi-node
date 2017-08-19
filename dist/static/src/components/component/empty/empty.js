define('empty/empty.vue', function(require, exports, module) {

//
//
//
//
//
//
//

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = {
  props: {
    type: String,
    'default': '暂无数据'
  }
};
module.exports = exports['default'];
var __vue__options__;
if(exports && exports.__esModule && exports.default){
  __vue__options__ = exports.default;
}else{
  __vue__options__ = module.exports;
}
__vue__options__.render =function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
__vue__options__.staticRenderFns =[function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component-empty"},[_c('img',{attrs:{"src":"/static/image/empty.png"}}),_vm._v(" "),_c('p')])}]


});
