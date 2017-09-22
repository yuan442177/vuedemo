import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    counts:1
}

const mutations = {
  add(state){
    state.counts++
  },
  reduce(state){
    state.counts--
  }
}

const getters = {
  counts:function(state){
    return state.counts += 100
  }
}

const actions ={
  addAction(context){
      context.commit('add')
  },
  reduceAction({commit}){
      commit('reduce')
  }
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})
