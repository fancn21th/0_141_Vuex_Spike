<template>
  <ul class="container">
    <li v-for="item in items" :key="item.message">
      Outsider: {{ item.message }}
      <app-message
        :msg="item.message"
        @messageChanged="item.message = $event"
      ></app-message>
      <hr />
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from "vue";
import Message from "./components/Message.vue";

export default {
  data() {
    return {
      items: [{ message: "Foo" }, { message: "Bar" }],
    };
  },
  filters: {
    hightlight(message) {
      return `[${message}]`;
    },
  },
  components: {
    "app-message": Message,
  },
};
</script>

<style lang="less" scoped>
.container {
  color: green;
}
</style>
