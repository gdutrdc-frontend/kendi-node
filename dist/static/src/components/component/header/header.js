define('header/header.vue', function(require, exports, module) {

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
//
//

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = {
  props: {
    title: { 'default': '' },
    backgrounColor: {
      type: String,
      'default': '#13bbfa'
    },
    height: {
      type: Number | String,
      'default': 55
    },
    hasGoback: {
      type: Boolean,
      dafault: false
    },
    onGoback: {
      type: Function,
      'default': function _default() {}
    },
    fontSize: {
      type: Number | String,
      'default': 16
    },
    isFixed: {
      type: Boolean,
      'default': true
    }
  },
  computed: {
    heightPx: function heightPx() {
      return this.height + 'px';
    },
    fontSizePx: function fontSizePx() {
      return this.fontSize + 'px';
    },
    positionType: function positionType() {
      return this.isFixed ? 'fixed' : 'static';
    }
  },
  methods: {
    gobackHandler: function gobackHandler(e) {
      this.onGoback(e);
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
__vue__options__.render =function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"component-header",style:({
    backgroundColor: _vm.backgrounColor,
    height: _vm.heightPx,
    position: _vm.positionType
  })},[(_vm.hasGoback)?_c('i',{staticClass:"icon icon-goback",style:({
      paddingTop: _vm.heightPx,
    }),on:{"click":_vm.gobackHandler}}):_vm._e(),_vm._v(" "),_c('h1',{staticClass:"component-header_title",style:({
      height: _vm.heightPx,
      lineHeight: _vm.heightPx,
      fontSize: _vm.fontSizePx,
    })})])}
__vue__options__.staticRenderFns =[]


});
