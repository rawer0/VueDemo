<template lang="html">
<div class="title">
  <div class="title_name">
    <span>Yaguang</span> 's Blog
  </div>
  <div class="title_option">
    <div class="item">HOME</div>
    <div class="item">MYWORK</div>
    <div class="item">TAGS</div>
  </div>
</div>
</template>

<script>
export default {
  name: 'header'
}
</script>

<style lang="css" scoped>
  .title{
    box-shadow: 0 0 10px rgba(14, 14 , 14, .26);
    height: 55px;
    position: fixed;
    width: 100%;
    padding-left: 30px;
    padding-right: 30px;
    box-sizing: border-box;
    background: white;
  }

  .title_name, .title_option{
    line-height: 55px;
  }

  .title_name {
    float: left;
    font-weight: 800;
  }

  .title_option .item {
    display: inline-block;
    padding-left: 20px;
    padding-right: 20px;
  }

  .title_option{
    float: right;
  }

  .title_name span{
    border-radius: 3px;
    background: black;
    color: white;
    padding-bottom: 3px;
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 1px;
  }
</style>
