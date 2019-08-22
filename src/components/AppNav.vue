<template>
  <div id="AppNav">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <div class="navbar-nav">
        <router-link to="/" class="nav-item nav-link">Home</router-link>
        <router-link to="/about" class="nav-item nav-link">About</router-link>
        <router-link v-if="!isLoggedIn" to="/site-login" class="nav-item nav-link">Login</router-link>
        <router-link v-if="isAdmin" to="/admin" class="nav-item nav-link">Admin</router-link>
        <router-link v-if="isAdmin" to="/dashboard" class="nav-item nav-link">Dashboard</router-link>
        <router-link v-if="isUser" to="/profile" class="nav-item nav-link">Profile</router-link>
        <a v-if="isLoggedIn" @click="logout" class="nav-item nav-link">Logout</a>
      </div>
    </nav>
  </div>
</template>

<style>
</style>

<script>
import Axios from "axios";
import Vue from "vue";

Vue.prototype.$http = Axios;
const token = localStorage.getItem("token");
if (token) {
  Vue.prototype.$http.defaults.headers.common["Authorization"] = token;
}
export default {
  name: "AppNav",
  data() {
    return {
      currentUser: null
    };
  },
  computed: {
    isAdmin: function() {
      return this.$store.getters.isAdmin;
    },
    isUser: function() {
      return this.$store.getters.isUser;
    },
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    }
  },
  methods: {
    logout: function() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/site-login");
      });
    }
  },
  created: function() {
    this.$http.interceptors.response.use(undefined, function(err) {
      // eslint-disable-next-line
      return new Promise(function(resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch("logout");
        }
        throw err;
      });
    });
  }
};
</script>