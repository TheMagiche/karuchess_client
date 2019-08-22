<template>
  <div class="outer-wrapper">
    <app-nav></app-nav>
    <div id="SiteRegister">
      <b-row class="justify-content-md-center">
        <b-col cols="6">
          <h2>Please Register</h2>
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
              <b-form-input id="username" :state="state" v-model.trim="register.username"></b-form-input>
            </b-form-group>
            <b-form-group
              id="fieldsetHorizontal"
              horizontal
              :label-cols="4"
              breakpoint="md"
              label="Enter Email"
            >
              <b-form-input id="email" :state="state" v-model.trim="register.email"></b-form-input>
            </b-form-group>
            <b-form-group
              id="fieldsetHorizontal"
              horizontal
              :label-cols="4"
              breakpoint="md"
              label="Enter Lichess ID"
            >
              <b-form-input id="email" :state="state" v-model.trim="register.lichessId"></b-form-input>
            </b-form-group>
            <b-form-group
              id="fieldsetHorizontal"
              horizontal
              :label-cols="4"
              breakpoint="md"
              label="Enter Password"
            >
              <b-form-input
                type="password"
                id="password"
                :state="state"
                v-model.trim="register.password"
              ></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Register</b-button>
            <b-button type="button" variant="success" @click="$router.go(-1)">Cancel</b-button>
          </b-form>
        </b-col>
      </b-row>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppNav from "../components/AppNav";
import AppFooter from "../components/AppFooter";
export default {
  name: "SiteRegister",
  components: {
    "app-nav": AppNav,
    "app-footer": AppFooter
  },
  data() {
    return {
      register: {},
      errors: []
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      let data = {
        username: this.register.username,
        email: this.register.email,
        password: this.register.password,
        lichessId: this.register.lichessId
      };
      this.$store
        .dispatch("register", data)
        .then(() => this.$router.push({ name: "Profile" }))
        .catch(err => {
          this.err.push(err);
          // eslint-disable-next-line
          console.log(err);
        });
    }
  }
};
</script>