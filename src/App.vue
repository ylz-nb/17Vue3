<template>
  <div id="app">
    <div id="nav">
      <h1>问卷调查表填写</h1>
      <router-link id="xs" to="/page1" style="text-decoration: none;">
        <span @click="a()">点击开始填写问卷</span></router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    methods:{
      a(){
        var a=document.getElementById("xs");
        a.style.display="none";
      }
    }
  }
</script>

<style>
  #app {text-align: center;}
  #xs span{ background: yellow;}
</style>
