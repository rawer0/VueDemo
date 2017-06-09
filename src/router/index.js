import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import myHeader from '@/components/header'
import blogDetail from '@/components/blog'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Hello',
    component: Hello
  }, {
    path: '/header',
    name: 'header',
    component: myHeader
  }, {
    path: '/blog',
    name: 'blog',
    component: blogDetail
  }]
})
