define('home/tab/tab.vue', function(require, exports, module) {

//
//
//
//
//
//
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
var vBus = require('vBus');

exports['default'] = {
  props: ['activePanel', 'items'],
  data: function data() {
    return {};
  },
  methods: {
    toggleTab: function toggleTab(key) {
      vBus.$emit('togglePanel', key);
    }
  }
};
module.exports = exports['default'];
var __vue__options__;
if(exports && exports.__esModule && exports.default){
  __vue__options__ = exports.default;
}else{
  __vue__options__ = module.exports;
}
__vue__options__.render =function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"pages-home-tab"},_vm._l((_vm.items),function(item){return _c('li',{key:item.key,class:_vm.activePanel === item.key ? 'active' : '',on:{"click":function($event){_vm.toggleTab(item.key)}}})}))}
__vue__options__.staticRenderFns =[]


});
