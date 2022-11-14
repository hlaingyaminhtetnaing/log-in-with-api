import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import router from '../router/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    success: '',
    errorMessage: ''
  },
  getters: {
    getSuccess(state) {
      return state.success;
    },
    getErrorMessage(state) {
      return state.errorMessage;
    },
  },
  mutations: {
    async LOG_IN(state,{username, emailData  }) {
      try {
        let res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
        let resData = res.data;
        for (let index = 0; index < resData.length; index++) {
          if (resData[index].email == emailData && resData[index].username == username) {
            router.push(`/home/${index}`);
            return state.success = true;
          } else {
            state.success = false;
          }
        }
        if (state.success == false) {
          state.errorMessage = "Your input is wrong!"
        }
      }
      catch (error) {
        throw new Error(error)
      }
    }
  },
  actions: {
    login({ commit },{username, emailData  } ) {
      commit('LOG_IN',  {username, emailData  })
    }
  },
  modules: {
  }
})
