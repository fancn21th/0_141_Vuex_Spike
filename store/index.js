import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    items: [{ message: "Foo" }, { message: "Bar" }],
  },
});
