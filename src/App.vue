<template>
  <div id="app">
    <img src="./assets/logo.png">
    <transition name="fade">
    <router-view></router-view>
    </transition>
    <router-view name="left" style="float:left;width:50%;background-color:#ccc;height:300px;"></router-view>
    <router-view name="right" style="float:right;width:50%;background-color:#c0c;height:300px;"></router-view>
    <router-view name="params"></router-view>
    <router-view name="count"></router-view>
    <p>导航 ：
      <button @click="goback">后退</button>
      <router-link to="/">首页</router-link>
      <router-link to="/Yuan">Hi页面</router-link>
      <router-link :to="{name:'hi1',params:{username:'Yuan'}}">Hi1页面</router-link>
      <router-link to="/hi2">Hi2页面</router-link>
      <router-link to="/params/198/Yuan webSite is very good!">params</router-link>
      <router-link to="/aaaaa">404</router-link>
      <router-link to="/count">count</router-link>
    </p>

  </div>
</template>

<script>
export default {
  name: 'app',
  methods:{
    goback(){
      this.$router.go(-1)
    }
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
  margin-top: 60px;
}
.fade-enter {
  opacity:0;
}
.fade-leave{
  opacity:1;
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .5s;
}
</style>
