// index.js

import Vue from "vue";
import App from "./App.vue";
import { store } from "./store";

new Vue({ store, render: (createElement) => createElement(App) }).$mount(
  "#app"
);
