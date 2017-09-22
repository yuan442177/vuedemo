<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-view></router-view>
    <router-view name="left" style="float:left;width:50%;background-color:#ccc;height:300px;"></router-view>
    <router-view name="right" style="float:right;width:50%;background-color:#c0c;height:300px;"></router-view>
  </div>
</template>
<script>
  export default {
    name: 'hi',
    data () {
      return {
        msg: 'Hi, I am Hi1b!'
      }
    }
  }
</script>
<style scoped>

</style>
