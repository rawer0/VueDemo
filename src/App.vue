<template>
  <div id="app">
    <my-header/>
    <router-view></router-view>
  </div>
</template>


<script>
import myHeader from './components/header.vue'

export default {
  name: 'app',
  components: {
    myHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body{
  margin:0;
}
</style>
