<template>
<div class="hello">
  <div >
  <img class="pic" src="../assets/1.png" alt="">
  </div>

  <div class="content">
    <div class="item" v-for="item in list" v-on:click="goTo(item)">
      <div class="title">
        {{item.title}}
      </div>
      <div class="desc">
        {{item.desc}}
      </div>
    </div>
  </div>
</div>
</template>

<script>
import router from '../router'

export default {
  name: 'hello',
  methods: {
    goTo: function (item) {
      if (item.url.indexOf('http') !== -1) {
        window.location.href = item.url
      } else {
        router.push(item.url)
      }
    }
  },
  beforeCreate () {
    this.$http.get('http://localhost:8080/#/blog').then(response => {
      this.list[0].title = 'hahhahaha'
    }, response => {
      // error callback
    })
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list: [{
        title: '让微信小程序支持 ES6 的 Promise 特性',
        desc: '微信昨日更新自家的Web开发工具后无法使用原生 Promise，这篇教程教你引入第三方库来使用 Promise遇到的问题 微信开发者工具更新版本后, 移除了开发者工具对 ES6 中 Promise 特性原生的支持, 理由是因为实体机器是不支持 Promise 的, 所以我们需要引入第三方的 Promise 库 微信更新日志 解决方案 下载第三方库 在这里我引入的是 Bluebird 库, 先到 B..',
        url: 'http://www.baidu.com'
      }, {
        title: 'Object.assign 应用场景',
        desc: 'Object.assign 是 ES 2015 的新特性 语法: Object.assign(target, ...sources) 下面是我在实际开发中, 运用 Object.assign 封装微信小应用的 wx.request 请求的场景 const _http = ( method, ..',
        url: ''
      }, {
        title: 'show keybroad - v0.0.2',
        desc: '使用说明自己写的一个类似支付宝输入密码的输入框 使用教程# html <div id=\'rootElement\'></div> # javascript showKbd.init({ el: \'#rootElement\', // 元素ID run: functio..',
        url: ''
      }, {
        title: 'item4',
        desc: 'item1addsdsffs',
        url: 'blog'
      }, {
        title: 'item5',
        desc: 'item1addsdsffs',
        url: ''
      }, {
        title: 'item6',
        desc: 'item1addsdsffs',
        url: ''
      }, {
        title: 'item7',
        desc: 'item1addsdsffs',
        url: ''
      }, {
        title: 'item8',
        desc: 'item1addsdsffs',
        url: ''
      }, {
        title: 'item9',
        desc: 'item1addsdsffs',
        url: ''
      }, {
        title: 'item10',
        desc: 'item1addsdsffs',
        url: ''
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  padding-top: 70px;
  padding-left: 120px;
  padding-right: 120px;
}

.pic{
  width: 100%;
  height: 400px;
  box-sizing: border-box;
}

.item{
  text-align: left;
  cursor: pointer;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #ddd;
}

.item:hover .title{
  color: red;
}

.title{
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 26px;
  font-weight: 200;
}

.desc{
  font-size: 16px;
  margin-bottom: 10px;
}
</style>
