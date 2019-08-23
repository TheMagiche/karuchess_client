import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import DashboardLayout from "@/layout/DashboardLayout";
import AuthLayout from "@/layout/AuthLayout";
import store from "./store";
Vue.use(Router);

const router = new Router({
  linkExactActiveClass: "active",
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/dashboard",
      redirect: "dashboard",
      component: DashboardLayout,
      meta: {
        requiresAuth: true,
        is_admin: true
      },
      children: [
        {
          path: "/dashboard",
          name: "dashboard",
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () =>
            import(/* webpackChunkName: "demo" */ "./views/Dashboard.vue")
        },
        {
          path: "/icons",
          name: "icons",
          component: () =>
            import(/* webpackChunkName: "demo" */ "./views/Icons.vue")
        },
        {
          path: "/profile",
          name: "profile",
          component: () =>
            import(/* webpackChunkName: "demo" */ "./views/UserProfile.vue")
        },
        {
          path: "/maps",
          name: "maps",
          component: () =>
            import(/* webpackChunkName: "demo" */ "./views/Maps.vue")
        },
        {
          path: "/tables",
          name: "tables",
          component: () =>
            import(/* webpackChunkName: "demo" */ "./views/Tables.vue")
        }
      ]
    },
    {
      path: "/login",
      redirect: "login",
      component: AuthLayout,
      children: [
        {
          path: "/login",
          name: "login",
          component: () =>
            import(/* webpackChunkName: "demo" */ "./views/Login.vue")
        },
        {
          path: "/register",
          name: "register",
          component: () =>
            import(/* webpackChunkName: "demo" */ "./views/Register.vue")
        }
      ]
    },
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/site-login",
      name: "SiteLogin",
      meta: {
        guest: true
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/SiteLogin.vue")
    },
    {
      path: "/site-register",
      name: "SiteRegister",
      meta: {
        guest: true
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/SiteRegister.vue")
    },
    {
      path: "/site-admin/:adminName",
      name: "Admin",
      props: true,
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Admin.vue"),
      meta: {
        requiresAuth: true,
        is_admin: true
      }
    },
    {
      path: "/site-profile/:username",
      name: "Profile",
      props: true,
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Profile.vue"),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "*",
      name: "NotFound",
      component: () =>
        import(/* webpackChunkName: "about" */ "./pages/NotFoundPage.vue")
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next();
      return;
    }
    next("/site-login");
  } else {
    next();
  }
});

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (localStorage.getItem("jwtToken") == null) {
//       next({
//         path: "/site-login",
//         params: { nextUrl: to.fullPath }
//       });
//     } else {
//       let user = JSON.parse(localStorage.getItem("username"));
//       if (to.matched.some(record => record.meta.is_admin)) {
//         if (user.is_admin == 1) {
//           next();
//         } else {
//           next({ name: "Dashboard" });
//         }
//       } else {
//         next();
//       }
//     }
//   } else if (to.matched.some(record => record.meta.user)) {
//     if (localStorage.getItem("JwtToken") == null) {
//       next();
//     } else {
//       next({ name: "Profile" });
//     }
//   } else {
//     next();
//   }
// });

export default router;

// let router = new Router({
//   mode: 'history',
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     },
//     {
//       path: '/login',
//       name: 'login',
//       component: Login,
//       meta: {
//         guest: true
//       }
//     },
//     {
//       path: '/register',
//       name: 'register',
//       component: Register,
//       meta: {
//         guest: true
//       }
//     },
//     {
//       path: '/dashboard',
//       name: 'userboard',
//       component: UserBoard,
//       meta: {
//         requiresAuth: true
//       }
//     },
//     {
//       path: '/admin',
//       name: 'admin',
//       component: Admin,
//       meta: {
//         requiresAuth: true,
//         is_admin: true
//       }
//     },
//   ]
// })
