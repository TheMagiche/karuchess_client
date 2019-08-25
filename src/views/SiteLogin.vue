<template>
  <div class="outer-wrapper">
    <h1>Login To Continue</h1>
    <div id="SiteLogin">
      <div v-if="errors && errors.length">
        <div v-for="error of errors" :key="error">
          <div>{{error.message}}</div>
        </div>
      </div>
      <form role="form" @submit="onSubmit">
        <base-input
          class="input-group-alternative mb-3"
          placeholder="Lichess ID / Username"
          addon-left-icon="ni ni-email-83"
          v-model.trim="login.username"
        ></base-input>

        <base-input
          class="input-group-alternative"
          placeholder="Password"
          type="password"
          addon-left-icon="ni ni-lock-circle-open"
          v-model.trim="login.password"
        ></base-input>

        <div class="text-center">
          <base-button @click="onSubmit" type="primary" class="my-4">Login</base-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Axios from "axios";

export default {
  name: "SiteLogin",

  data() {
    return {
      state: "",
      login: {},
      errors: [],
      logIN: false
    };
  },

  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      let username = this.login.username;
      let password = this.login.password;
      Vue.prototype.$http = Axios;
      const token = localStorage.getItem("jwtToken");
      if (token) {
        Vue.prototype.$http.defaults.headers.common["Authorization"] = token;
      }
      this.$store
        .dispatch("login", { username, password })

        .then(() => {
          this.$router.push({
            name: "Home"
          });
        })
        .catch((
          err // eslint-disable-next-line
        ) => console.log(err));
    },
    register() {
      this.$router.push({
        name: "SiteRegister"
      });
    }
  }
};
</script>