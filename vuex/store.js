/**
 * Created by lidong on 16/7/18.
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

//初始状态
const state = {
  notes: [],
  activeNote: {}
};

//定义mutation
const mutation = {

};

export default new Vuex.Store({
  state,
  mutations
});

