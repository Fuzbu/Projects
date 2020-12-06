<template>
  <h1>{{ title }}</h1>
  <Modal />
</template>

<script>
// IMPORT COMPUNONENTS Step#1
import Modal from "./components/Modal.vue";

export default {
  name: "App",

  // REGISTER COMPONENTS Step#2
  components: { Modal },

  data() {
    return {
      title: "My first Vue App",
      header: "Sign up for giveaway" ,
      text: "Grab your free code"
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
