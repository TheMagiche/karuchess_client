<template>
  <div>
    <h1>Profile</h1>
    <p>Welcome User.</p>
    <p>{{ lichess }}</p>
    <!-- <div>
      All users from secure (admin only) api end point:
      <ul v-if="users.length">
        <li v-for="user in users" :key="user.id">{{user.firstName + ' ' + user.lastName}}</li>
      </ul>
    </div>-->
  </div>
</template>

<script>
import { LichessAPIService } from "../api/lichessAPIservice";
const lichessapiService = new LichessAPIService();
export default {
  name: "Profile",
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