import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: "",
    token: localStorage.getItem("jwtToken") || "",
    username: localStorage.getItem("username") || "",
    email: localStorage.getItem("email") || "",
    lichessId: localStorage.getItem("lichessId") || "",
    role: localStorage.getItem("role") || ""
  },
  mutations: {
    auth_request(state) {
      state.status = "loading";
    },
    auth_reg_success(state, token) {
      state.status = "success";
      state.token = token;
    },
    auth_login_success(state, token) {
      state.status = "success";
      state.token = token;
    },
    auth_error(state) {
      state.status = "error";
    },
    logout(state) {
      state.status = "";
      state.token = "";
      state.username = "";
      state.email = "";
      state.lichessId = "";
      state.role = "";
    }
  },
  actions: {
    login(context, user) {
      return new Promise((resolve, reject) => {
        context.commit("auth_request");
        axios({
          url: "/api/auth/login",
          data: { username: user.username, password: user.password },
          method: "POST"
        })
          .then(resp => {
            const token = resp.data.token;
            let username = resp.data.username;
            let email = resp.data.email;
            let lichessId = resp.data.lichess_id;
            let role = resp.data.role;
            localStorage.setItem("jwtToken", token);
            localStorage.setItem("username", username);
            localStorage.setItem("email", email);
            localStorage.setItem("lichessId", lichessId);
            localStorage.setItem("role", role);
            axios.defaults.headers.common["Authorization"] = token;
            context.commit("auth_login_success", token);

            resolve(resp);
          })
          .catch(err => {
            context.commit("auth_error");
            localStorage.removeItem("jwtToken");
            localStorage.removeItem("username");
            localStorage.removeItem("email");
            localStorage.removeItem("role");
            localStorage.removeItem("lichessId");
            reject(err);
          });
      });
    },
    register(context, user) {
      return new Promise((resolve, reject) => {
        context.commit("auth_request");
        axios({
          url: "/api/auth/register",
          data: {
            firstname: user.firstname,
            lastname: user.lastname,
            age: user.age,
            regNo: user.regNO,
            username: user.username,
            email: user.email,
            password: user.password,
            lichessId: user.lichessId
          },
          method: "POST"
        })
          .then(resp => {
            const token = resp.data.token;
            localStorage.setItem("jwtToken", token);
            axios.defaults.headers.common["Authorization"] = token;
            context.commit("auth_reg_success", token);
            resolve(resp);
          })
          .catch(err => {
            context.commit("auth_error", err);
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },
    async logout(context) {
      try {
        await new Promise(resolve => {
          context.commit("logout");
          localStorage.removeItem("jwtToken");
          localStorage.removeItem("username");
          localStorage.removeItem("email");
          localStorage.removeItem("role");
          localStorage.removeItem("lichessId");
          delete axios.defaults.headers.common["Authorization"];
          resolve();
        });
      } catch (err) {
        context.commit("auth_error", err);
      }
    }
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    isUser: state => {
      if (state.role == "User" || state.role == "Admin") {
        return true;
      } else {
        return false;
      }
    },
    isAdmin: state => {
      if (state.role == "Admin") {
        return true;
      } else {
        return false;
      }
    },
    user_lichessID: state => {
      return state.lichessId;
    },
    user_username: state => {
      return state.username;
    }
  }
});
