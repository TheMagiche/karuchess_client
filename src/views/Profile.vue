<template>
  <div class="outer-wrapper">
    <!-- <app-nav></app-nav> -->
    <div id="Profile">
      <h1>Profile</h1>
      <p>Welcome {{user}}.</p>
      <p>{{ lichess }}</p>
    </div>
    <!-- <app-footer></app-footer> -->
  </div>
</template>

<script>
// import AppNav from "../components/AppNav";
// import AppFooter from "../components/AppFooter";
import { LichessAPIService } from "../api/lichessAPIservice";
const lichessapiService = new LichessAPIService();
export default {
  name: "Profile",
  // components: {
  //   "app-nav": AppNav,
  //   "app-footer": AppFooter
  // },
  props: {
    username: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      lichess: {},
      user: this.$store.getters.user_username
    };
  },

  methods: {
    getLichessData() {
      let username = this.$store.getters.user_lichessID;
      lichessapiService
        .getuser(username)
        .then(data => {
          // eslint-disable-next-line
          console.log(data);
          this.lichess = data;
        })
        .catch();
    }
  },
  mounted() {
    // userService.getAll().then(users => (this.users = users));
    this.getLichessData();
  }
};
</script>