<template>
  <div class="outer-wrapper">
    <div id="SiteRegister">
      <div v-if="errors && errors.length">
        <div v-for="error of errors" :key="error">
          <div>{{error.message}}</div>
        </div>
      </div>
      <form role="form" @submit="onSubmit">
        <base-input
          class="input-group-alternative mb-3"
          placeholder="First Name"
          addon-left-icon="ni ni-hat-3"
          v-model.trim="register.firstname"
        ></base-input>
        <base-input
          class="input-group-alternative mb-3"
          placeholder="Last Name"
          addon-left-icon="ni ni-hat-3"
          v-model.trim="register.lastname"
        ></base-input>
        <base-input
          class="input-group-alternative mb-3"
          placeholder="Lichess ID/ Username"
          addon-left-icon="ni ni-hat-3"
          v-model.trim="register.lichessId"
        ></base-input>
        <base-input
          class="input-group-alternative mb-3"
          placeholder="School Registration Number"
          addon-left-icon="ni ni-hat-3"
          v-model.trim="register.regNO"
        ></base-input>
        <base-input
          class="input-group-alternative mb-3"
          placeholder="Age"
          addon-left-icon="ni ni-hat-3"
          v-model.trim="register.age"
        ></base-input>
        <base-input
          class="input-group-alternative mb-3"
          placeholder="Email"
          addon-left-icon="ni ni-email-83"
          v-model.trim="register.email"
        ></base-input>

        <base-input
          class="input-group-alternative"
          placeholder="Password"
          type="password"
          addon-left-icon="ni ni-lock-circle-open"
          v-model.trim="register.password"
        ></base-input>

        <div class="text-center">
          <base-button type="success" class="my-4" @click="onSubmit">Create account</base-button>
          <base-button type="warning" class="my-4" @click="$router.go(-1)">Cancel</base-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SiteRegister",
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
        firstname: this.register.firstname,
        lastname: this.register.lastname,
        age: this.register.age,
        regNO: this.register.regNO,
        username: this.register.lichessId,
        email: this.register.email,
        password: this.register.password,
        lichessId: this.register.lichessId
      };
      this.$store
        .dispatch("register", data)
        .then(() => this.$router.push({ name: "SiteLogin" }))
        .catch(err => {
          this.err.push(err);
          // eslint-disable-next-line
          console.log(err);
        });
    }
  }
};
</script>