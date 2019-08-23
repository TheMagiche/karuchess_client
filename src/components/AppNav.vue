<template>
  <div id="AppNav">
    <!-- <nav class="navbar navbar-expand navbar-dark bg-dark">
      <div class="navbar-nav">
        <router-link to="/" class="nav-item nav-link">Home</router-link>
        <router-link to="/about" class="nav-item nav-link">About</router-link>
        <router-link v-if="!isLoggedIn" to="/site-login" class="nav-item nav-link">Login</router-link>
        <router-link v-if="isAdmin" to="/admin" class="nav-item nav-link">Admin</router-link>
        <router-link v-if="isAdmin" to="/dashboard" class="nav-item nav-link">Dashboard</router-link>
        <router-link v-if="isUser" to="/profile" class="nav-item nav-link">Profile</router-link>
        <a v-if="isLoggedIn" @click="logout" class="nav-item nav-link">Logout</a>
      </div>
    </nav>-->
    <header class="header-global">
      <base-nav class="navbar-main" transparent type effect="dark" expand>
        <a slot="brand" class="navbar-brand mr-lg-1 brand" href="/">
          <!-- <img src="@/assets/img/brand/white.png" /> -->
          Karatina Knights
        </a>

        <div class="row" slot="content-header" slot-scope="{closeMenu}">
          <div class="col-6 collapse-brand">
            <a href="/" class="brand">
              <!-- <img src="@/assets/img/brand/blue.png" />  -->
              Karatina Knights
            </a>
          </div>
          <div class="col-6 collapse-close">
            <close-button @click="closeMenu"></close-button>
          </div>
        </div>

        <!-- <ul class="navbar-nav navbar-nav-hover align-items-lg-center"></ul> -->
        <ul class="navbar-nav align-items-lg-center ml-lg-auto">
          <li class="nav-item">
            <router-link to="/about" class="nav-link" replace>
              <!-- <i class="ni ni-single-copy-04"></i> -->
              <span class="nav-link-inner--text">About</span>
            </router-link>
          </li>
          <li class="nav-item" v-if="isUser">
            <router-link :to="{ path: `/site-profile/${getUsername}` }" class="nav-link">
              <!-- <i class="ni ni-bullet-list-67"></i> -->
              <span class="nav-link-inner--text">Profile</span>
            </router-link>
          </li>
          <!-- <li class="nav-item" v-if="isAdmin">
            <router-link
              :to="{ name:'dashboard',params: { username: getUsername() }}"
              class="nav-link"
          >-->
          <!-- <i class="ni ni-bullet-list-67"></i> -->
          <!-- <span class="nav-link-inner--text">Dashboard</span>
            </router-link>
          </li>-->
          <li class="nav-item" v-if="isAdmin">
            <router-link :to="{ path: `/site-admin/${getUsername}` }" class="nav-link">
              <!-- <i class="ni ni-bullet-list-67"></i> -->
              <span class="nav-link-inner--text">Admin</span>
            </router-link>
          </li>
          <li class="nav-item" v-if="!isLoggedIn">
            <router-link to="/site-login" class="nav-link">
              <!-- <i class="ni ni-bullet-list-67"></i> -->
              <span class="nav-link-inner--text">Login</span>
            </router-link>
          </li>
          <li class="nav-item" v-if="!isLoggedIn">
            <router-link to="/site-register" class="nav-link">
              <!-- <i class="ni ni-bullet-list-67"></i> -->
              <span class="nav-link-inner--text">Register</span>
            </router-link>
          </li>
        </ul>

        <ul class="navbar-nav align-items-lg-center ml-lg-auto">
          <a class="nav-log-link">Welcome: {{ username }}</a>
        </ul>
        <a v-if="isLoggedIn" @click="logout" class="nav-log-link">| Logout</a>
      </base-nav>
    </header>
  </div>
</template>


<script>
import Axios from "axios";
import Vue from "vue";

import BaseNav from "@/components/BaseNav";
// import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";

Vue.prototype.$http = Axios;
const token = localStorage.getItem("jwtToken");
if (token) {
  Vue.prototype.$http.defaults.headers.common["Authorization"] = token;
}
export default {
  name: "AppNav",
  components: {
    BaseNav,
    CloseButton
    // BaseDropdown
  },
  data() {
    return {
      username: "",
      isLoggedIn: this.$store.getters.isLoggedIn,
      isAdmin: this.isanAdmin(),
      isUser: this.isaUser()
    };
  },
  computed: {
    getUsername: function() {
      return this.$store.getters.user_username;
    }
  },
  methods: {
    isanAdmin: function() {
      let admin = this.$store.getters.isAdmin;
      const username = localStorage.getItem("username");
      if (admin === true && username) {
        return true;
      }
      return false;
    },
    isaUser: function() {
      let user = this.$store.getters.isUser;
      const username = localStorage.getItem("username");
      if (user === true && username) {
        return true;
      }
      return false;
    },

    logout: function() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/site-login");
      });
    },
    checkOudatedToken: function() {
      this.$http.interceptors.response.use(undefined, function(err) {
        // eslint-disable-next-line
        return new Promise(function(resolve, reject) {
          if (
            err.status === 401 &&
            err.config &&
            !err.config.__isRetryRequest
          ) {
            this.$store.dispatch("logout");
          }
          throw err;
        });
      });
    },
    checkLogginStatus: function() {
      const token = localStorage.getItem("jwtToken");
      const username = localStorage.getItem("username");
      if (token && username) {
        this.username = username;
      } else {
        this.username = "Guest";
      }
    }
  },
  created() {
    this.checkOudatedToken();
    this.checkLogginStatus();
    // this.checkStatuses();
  }
};
</script>

<style>
.brand {
  color: #f2a30c !important;
}
.nav-link-inner--text {
  color: #00a651 !important;
  text-transform: capitalize !important;
  text-align: center;
  font-size: 14px !important;
}
.nav-log-link {
  margin-left: 10px;
  color: #00a651 !important;
  font-size: 14px !important;
  cursor: pointer !important;
}
</style>
