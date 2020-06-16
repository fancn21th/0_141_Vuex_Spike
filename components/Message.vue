<template>
  <div>
    <h1>Insider msg: {{ msg }}</h1>
    <!-- <input type="text" v-model="msg" /> -->
    <h1>Insider message: {{ message }}</h1>
    <input type="text" :value="msg" @input="changeMessage" />
  </div>
</template>

<script>
export default {
  props: ["msg"],
  data() {
    return {
      message: "",
    };
  },
  methods: {
    changeMessage(event) {
      this.message = event.target.value;
      this.$emit("messageChanged", this.message);
    },
  },
};
</script>

<style lang="less" scoped></style>
