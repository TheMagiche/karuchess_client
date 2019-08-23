<template>
  <div class="outer-wrapper">
    <app-nav></app-nav>
    <div id="Home">
      <p>Welcome to Karatina Chess Club: {{ username }}</p>
    </div>
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
  },
  data() {
    return {
      username: ""
    };
  },
  methods: {
    checkLogginStatus: function() {
      const token = localStorage.getItem("jwtToken");
      const username = localStorage.getItem("username");
      if (token && username) {
        this.username = username;
      } else {
        this.username = "Guest";
      }
    },
    refreshPage: function() {
      this.$route.go(0);
    }
  },
  created() {
    this.checkLogginStatus();
  }
};
</script>
