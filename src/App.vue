<template>
  <div id="app">
    <app-nav></app-nav>
    <router-view :key="$route.fullPath"></router-view>
    <app-footer></app-footer>
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
import AppNav from "./components/AppNav";
import AppFooter from "./components/AppFooter";
export default {
  name: "app",
  components: {
    "app-nav": AppNav,
    "app-footer": AppFooter
  },
  data() {
    return {};
  },
  methods: {}
};
</script>