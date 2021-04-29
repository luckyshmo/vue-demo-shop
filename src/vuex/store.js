import Vue from 'vue'
import Vuex from 'vuex'

import axios from "axios";

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    searchValue: '',
    isMobile: false,
    isDesktop: true,
    products: [],
    cart: []
  },
  mutations: { //sync
    SET_PRODUCTS_TO_STATE: (state, products) => {
        state.products = products;
      },
  },
  actions: { //async
    GET_PRODUCTS_FROM_API({commit}) {
        return axios('http://localhost:3000/products', {
          method: "GET"
        })
          .then((products) => {
            commit('SET_PRODUCTS_TO_STATE', products.data);
            return products; //для использования в компоненте
          })
          .catch((error) => {
            console.log(error)
            return error; //для использования в компоненте
          })
      },
  },
  getters: {
    PRODUCTS(state) {
        return state.products;
    },
  },
});

export default store;