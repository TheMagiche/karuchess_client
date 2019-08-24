<template>
  <div class="outer-wrapper">
    <div id="Home">
      <p>Welcome to Karatina Chess Club: {{ getUsername }}</p>
    </div>
  </div>
</template>
<style lang="">
</style>
<script>
// @ is an alias to /src

export default {
  name: "Home",

  data() {
    return {};
  },
  computed: {
    getUsername: function() {
      let username = this.$store.getters.user_username;
      if (username == localStorage.getItem("username")) {
        return username;
      } else {
        return "Guest";
      }
    }
  },
  methods: {}
};
</script>
