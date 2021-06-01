import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    xxoo:10
  },
  mutations: {
	  jia(state){
		  state.xxoo++
	  },
	  jian(state){
		  state.xxoo--
	  }
  },
  actions: {},
  modules: {},
});
