<template>
  <ul class="container">
    <li v-for="item in items" :key="item.message">
      {{ item.message }}
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from "vue";

export default {
  data() {
    return {
      items: [{ message: "Foo" }, { message: "Bar" }],
    };
  },
};
</script>

<style lang="less" scoped>
.container {
  color: green;
}
</style>
