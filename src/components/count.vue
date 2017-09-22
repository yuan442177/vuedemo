<template lang="pug">
  <div>
    <h1>{{msg}}</h1>
    <hr>
    <h2>{{$store.state.counts}}---{{counts}}</h2>
    <button @click="add">+</button>
    <button @click="reduce">-</button>

    <button @click="addAction">A+</button>
    <button @click="reduceAction">A-</button>
  </div>
</template>

<script>
  import store from '@/vuex/store'
  import { mapState,mapMutations,mapGetters,mapActions } from 'vuex';
  export default{
      data(){
          return {
              msg:'Hello Vuex'
          }
      },
      methods: {
        ...mapMutations([
          'add', 'reduce'
        ]),
        ...mapActions(['addAction', 'reduceAction'])
      },
      /* computed: {
        count() {
          return this.$store.state.count
        }
      }, */
     /*  computed:mapState({
        count:state=>state.count
      }), */
      computed:{
        ...mapState(['counts']),
        ...mapGetters(['counts'])
      },
    store
  }
</script>

