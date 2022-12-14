import Vue from "vue";
import Vuex from "vuex";
import Auth from "./auth/auth";
import Post from "./posts/post";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Auth,
    Post
  }
});
