<template>
  <div class="outer-wrapper">
    <app-nav></app-nav>
    <div id="Admin">
      <h1>Admin</h1>
      <p>This page can only be accessed by administrators.</p>
      <p>{{ lichess }}</p>
      <!-- <div>
      All users from secure (admin only) api end point:
      <ul v-if="users.length">
        <li v-for="user in users" :key="user.id">{{user.firstName + ' ' + user.lastName}}</li>
      </ul>
      </div>-->
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppNav from "../components/AppNav";
import AppFooter from "../components/AppFooter";
import { LichessAPIService } from "../api/lichessAPIservice";
const lichessapiService = new LichessAPIService();
export default {
  name: "Admin",
  components: {
    "app-nav": AppNav,
    "app-footer": AppFooter
  },
  data() {
    return {
      // user: authenticationService.currentUserValue,
      // users: []
      lichess: {}
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