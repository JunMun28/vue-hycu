import Vue from 'vue';
import Router from 'vue-router';
import DashboardLayout from '../views/Starter/SampleLayout.vue';
import Starter from '../views/Starter/SamplePage.vue';
import Login from '../views/Pages/Login.vue';
import AuthLayout from '@/views/Pages/AuthLayout.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/login',
      component: Login,
      children: [
        {
          path: 'login',
          name: 'login',
          components: { default: AuthLayout }
        }
      ]
    }
    // {
    //   path: '/',
    //   name: 'home',
    //   redirect: '/dashboard',
    //   component: DashboardLayout,
    //   children: [
    //     {
    //       path: 'dashboard',
    //       name: 'dashboard',
    //       components: { default: Starter }
    //     }
    //   ]
    // }
  ],
  scrollBehavior: (to, from ,savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  }
});