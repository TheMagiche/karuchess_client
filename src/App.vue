<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>-->
    <!-- <nav v-if="currentUser" class="navbar navbar-expand navbar-dark bg-dark"> -->
    <notifications></notifications>

    <!-- <app-nav></app-nav> -->
    <router-view :key="$route.fullPath"></router-view>
    <!-- <app-footer></app-footer>+ -->
  </div>
</template>

<style>
@import url("./assets/css/style.css");

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
<script>
// import AppNav from "./components/AppNav";
// import AppFooter from "./components/AppFooter";
export default {
  name: "app",
  // components: {
  //   "app-nav": AppNav,
  //   "app-footer": AppFooter
  // },
  data() {
    return {};
  },
  methods: {}
};
</script>