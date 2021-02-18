import Vue from "vue";
import DashboardPlugin from "./plugins/dashboard-plugin";
var axios = require("./plugins/axios");
import App from "./App.vue";
import { GridGlobal } from "gridjs-vue";
import Vuex from "vuex";

// router setup
import router from "./routes/router";
// plugin setup

Vue.use(DashboardPlugin);
Vue.use(GridGlobal);
Vue.use(axios);
Vue.use(Vuex);

import jsonData from "../data.json";
const store = new Vuex.Store({
  state: {
    hycuData: jsonData
  },
  mutations: {
    // increment(state) {
    //   state.count++;
    // }
  },
  getters: {
    trimGroups: state => {
      return Object.keys(state.hycuData);
    },
    TrimGrpHeader: state => group => {
      // console.log(state.hycuData[group]["header"]);
      return state.hycuData[group]["header"];
    },
    TrimGrpData: state => group => {
      // console.log(state.hycuData[group]["data"]);
      return state.hycuData[group]["data"];
    }
  }
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: h => h(App),
  store,
  router
});
