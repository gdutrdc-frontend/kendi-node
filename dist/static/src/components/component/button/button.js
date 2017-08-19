define('button/button.vue', function(require, exports, module) {

//
//
//
//
//
//
//

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = {
  data: function data() {
    return {};
  },
  props: {
    text: {
      type: String
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    onClick: {
      type: Function,
      "default": function _default() {}
    }
  },
  methods: {
    clickHandler: function clickHandler(e) {
      if (this.disabled) return false;
      this.onClick(e);
      return true;
    }
  }
};
module.exports = exports["default"];
var __vue__options__;
if(exports && exports.__esModule && exports.default){
  __vue__options__ = exports.default;
}else{
  __vue__options__ = module.exports;
}
__vue__options__.render =function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{class:{'component-button': true, disabled: _vm.disabled},on:{"click":_vm.clickHandler}})}
__vue__options__.staticRenderFns =[]


});
