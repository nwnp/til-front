<template>
  <div id="app">
    <h1>Hello world!</h1>
    <b-form-input v-model="inputValue"></b-form-input>
    <b-button variant="outline-primary" @click="logText">Button</b-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: ""
    };
  },
  methods: {
    logText() {
      console.log(this.inputValue);
      this.inputValue = "";
    }
  },
  name: "app"
};
</script>

<style></style>
