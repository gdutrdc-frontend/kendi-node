define('home/home', function(require, exports, module) {

var _ = require('util');
var header = require('header/header.vue');
var empty = require('empty/empty.vue');
var tab = require('home/tab/tab.vue');
var vBus = require('vBus');

exports.init = function (el) {

  new Vue({
    el: el,
    template: "<div class=\"pages-home\">\r\n  <v-header\r\n    title=\"QQ看点\"\r\n    :hasGoback=\"true\"\r\n    :onGoback=\"goback\"\r\n  ></v-header>\r\n  <v-tab\r\n    :activePanel=\"activePanel\"\r\n    :items=\"panels\"\r\n  ></v-tab>\r\n  <div class=\"pages-home_content\">\r\n    <template v-for=\"panel in panels\">\r\n      <div \r\n        class=\"pages-home_part\"\r\n        v-if=\"activePanel == panel.key\"\r\n      >\r\n        <v-empty :text=\"'暂无' + panel.emptyName + '数据'\"></v-empty>\r\n      </div>\r\n    </template>\r\n  </div>\r\n</div>",
    data: {
      activePanel: 1,
      isLoading: false,
      panels: [
        { key: 1, name: '看点', emptyName: '看点' },
        { key: 2, name: '视频', emptyName: '视频' },
        { key: 3, name: '关注', emptyName: '关注' },
        { key: 4, name: '我的', emptyName: '个人' },
      ]
    },
    components: {
      'v-header': header,
      'v-tab': tab,
      'v-empty': empty,
    },
    created: function () {
      vBus.$on('togglePanel', (key) => {
        this.activePanel = key;
      });
    },
    methods: {
      goback() {
        alert('goback');
      },
    }
  });

}

});
