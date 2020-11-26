import Vue from "vue-native-core";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 1,
    data: [],
    people: {},
    profile: []
  },
  mutations: {
    increment(state) {
      // mutate state
      state.count++;
    },
    SET_DATA(state, payload) {
      state.data = payload
    },
    SET_PEOPLE(state, payload) {
      state.people = payload
    },
    SET_PROFILE(state, payload) {
      state.profile = payload
    }
  },
  actions: {
    increment(context) {
      context.commit("increment");
    },
    fetch_data({ commit }) {
      fetch(`http://52.76.85.10/test/location.json`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then((res) => {
          return res.json()
        })
        .then((data) => {
          commit("SET_DATA", data);
        })
        .catch(err => console.log(err))
      },
    fetch_people({ commit }) {
      fetch(`http://52.76.85.10/test/datalist.json`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then((res) => {
          return res.json()
        })
        .then((data) => {
          let convertData = {}
          let tempData = []
          let page = 1
          let count = 0
          data.forEach(e => {
            count++
            tempData.push(e)
            if(count == 10) {
              convertData[page] = tempData
              count = 0
              tempData = []
              page++
            } 
          });
          convertData[page] = tempData
          commit("SET_PEOPLE", convertData);
        })
        .catch(err => console.log(err))
      },
    fetch_profile({ commit }, id) {
      fetch(`http://52.76.85.10/test/profile/${id}.json`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then((res) => {
          return res.json()
        })
        .then((data) => {
          commit("SET_PROFILE", data);
        })
        .catch(err => console.log(err))
      },
  }
});
export default store;


