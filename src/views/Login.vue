<template>
  <b-row class="justify-content-md-center">
    <b-col cols="6">
      <div v-if="errors && errors.length">
        <div v-for="error of errors" :key="error">
          <b-alert show>{{error.message}}</b-alert>
        </div>
      </div>
      <b-form @submit="onSubmit">
        <b-form-group
          id="fieldsetHorizontal"
          horizontal
          :label-cols="4"
          breakpoint="md"
          label="Enter Username"
        >
          <b-form-input id="username" :state="state" v-model.trim="login.username"></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldsetHorizontal"
          horizontal
          :label-cols="4"
          breakpoint="md"
          label="Enter Password"
        >
          <b-form-input type="password" id="password" :state="state" v-model.trim="login.password"></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Login</b-button>
        <b-button type="button" variant="success" @click.stop="register()">Register</b-button>
      </b-form>
    </b-col>
  </b-row>
</template>

<script>
// import store from "../store";
import Vue from "vue";
import Axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      state: "",
      login: {},
      errors: []
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

        .then(() => this.$router.push({ name: "Home" }))
        .catch((
          err // eslint-disable-next-line
        ) => console.log(err));
    },
    register() {
      this.$router.push({
        name: "Register"
      });
    }
  }
};
</script>