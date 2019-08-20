<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <!-- <nav v-if="currentUser" class="navbar navbar-expand navbar-dark bg-dark">
      <div class="navbar-nav">
        <router-link to="/" class="nav-item nav-link">Home</router-link>
        <router-link v-if="isAdmin" to="/admin" class="nav-item nav-link">Admin</router-link>
        <a @click="logout" class="nav-item nav-link">Logout</a>
      </div>
    </nav>-->
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
// import { authenticationService } from "./api/services";
// import { router, Role } from "./api/_helpers";

export default {
  name: "app"
  // data() {
  //   return {
  //     currentUser: null
  //   };
  // },
  // computed: {
  //   isAdmin() {
  //     return this.currentUser && this.currentUser.role === Role.Admin;
  //   }
  // },
  // created() {
  //   authenticationService.currentUser.subscribe(x => (this.currentUser = x));
  // },
  // methods: {
  //   logout() {
  //     authenticationService.logout();
  //     router.push("/login");
  //   }
  // }
};
</script>