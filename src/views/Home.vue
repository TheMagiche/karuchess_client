<template>
  <div class="outer-wrapper">
    <app-nav></app-nav>
    <div id="Home">Karatina Chess Website</div>
    <app-footer></app-footer>
  </div>
</template>
<style lang="">
</style>
<script>
// @ is an alias to /src

import AppNav from "../components/AppNav";
import AppFooter from "../components/AppFooter";
export default {
  name: "Home",
  components: {
    "app-nav": AppNav,
    "app-footer": AppFooter
  }
};
</script>
