<template>
  <div>
    <h2>{{msg}}</h2>
    <p>ID:{{$route.params.newsId}}</p>
    <p>title:{{$route.params.newsTitle}}</p>
  </div>
</template>

<script>
  export default{
    name:'params',
    data () {
      return{
        msg:'params page'
      }
    }
  }
</script>
