import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";

Vue.use(VueRouter);

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: "active",
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  }
});

// router.beforeEach((to, from, next) => {
//   firebase.auth().onAuthStateChanged(function(user) {
//       if (to.matched.some(record => record.meta.requiresAuth)) {
//           if (!user) {
//               next({ path: '/login' });
//           } else {
//               next();
//           }

//       } else {
//           next();
//       }

//       if (to.matched.some(record => record.meta.hideForAuth)) {
//           if (user) {
//               next({ path: '/dashboard' });
//           } else {
//               next();
//           }
//       } else {
//           next();
//       }
//   });
// });

export default router;
