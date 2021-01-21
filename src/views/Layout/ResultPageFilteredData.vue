<template>
  <div class="wrapper">
    <notifications></notifications>
    <side-bar>
      <template slot="links">
        <sidebar-item
          :link="{
            name: 'Raw Data',
            path: '/result-table-raw-data',
            icon: 'fa fa-table text-primary',
          }"
        >
        </sidebar-item>
        <!-- 
        <sidebar-item
          :link="{
            name: 'Icons',
            path: '/icons',
            icon: 'ni ni-planet text-blue',
          }"
        >
        </sidebar-item>

        <sidebar-item
          :link="{
            name: 'Maps',
            path: '/maps',
            icon: 'ni ni-pin-3 text-orange',
          }"
        >
        </sidebar-item>

        <sidebar-item
          :link="{
            name: 'User Profile',
            path: '/profile',
            icon: 'ni ni-single-02 text-yellow',
          }"
        >
        </sidebar-item> -->

        <sidebar-item
          :link="{
            name: 'Filtered Data',
            path: '/result-table-filtered-data',
            icon: 'ni ni-bullet-list-67 text-red',
          }"
        >
        </sidebar-item>
        <!-- 
        <sidebar-item
          :link="{
            name: 'Login',
            path: '/login',
            icon: 'ni ni-key-25 text-info',
          }"
        >
        </sidebar-item>
        <sidebar-item
          :link="{
            name: 'Register',
            path: '/register',
            icon: 'ni ni-circle-08 text-pink',
          }"
        >
        </sidebar-item> -->
      </template>

      <!-- <template slot="links-after">
        <hr class="my-3" />
        <h6 class="navbar-heading p-0 text-muted">Documentation</h6>

        <b-nav class="navbar-nav mb-md-3">
          <b-nav-item href="https://">
            <i class="ni ni-spaceship"></i>
            <b-nav-text class="p-0">Getting started</b-nav-text>
          </b-nav-item>
          <b-nav-item href="https://">
            <i class="ni ni-palette"></i>
            <b-nav-text class="p-0">Foundation</b-nav-text>
          </b-nav-item>
          <b-nav-item href="https://">
            <i class="ni ni-ui-04"></i>
            <b-nav-text class="p-0">Components</b-nav-text>
          </b-nav-item>
        </b-nav>
      </template> -->
    </side-bar>
    <div class="main-content">
      <div class="p-6 text-center display-1">
        Coming Soon...
        <!-- <b-table
          :sticky-header="stickyHeader"
          :no-border-collapse="noCollapse"
          responsive
          :items="items"
          :fields="fields"
          hover
          head-variant="light"
        >
        </b-table> -->
      </div>
      <!-- <dashboard-navbar :type="$route.meta.navbarType"></dashboard-navbar> -->
      <div @click="$sidebar.displaySidebar(false)">
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <!-- <router-view></router-view> -->
        </fade-transition>
      </div>
      <!-- <content-footer v-if="!$route.meta.hideFooter"></content-footer> -->
    </div>
  </div>
</template>
<script>
/* eslint-disable no-new */
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

function hasElement(className) {
  return document.getElementsByClassName(className).length > 0;
}

function initScrollbar(className) {
  if (hasElement(className)) {
    new PerfectScrollbar(`.${className}`);
  } else {
    // try to init it later in case this component is loaded async
    setTimeout(() => {
      initScrollbar(className);
    }, 100);
  }
}

import DashboardNavbar from "./DashboardNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import { FadeTransition } from "vue2-transitions";
import Vuetable from "vuetable-2";

export default {
  components: {
    DashboardNavbar,
    ContentFooter,
    DashboardContent,
    FadeTransition,
    Vuetable,
  },
  methods: {
    initScrollbar() {
      let isWindows = navigator.platform.startsWith("Win");
      if (isWindows) {
        initScrollbar("sidenav");
      }
    },
  },
  mounted() {
    this.initScrollbar();
  },
  // data() {
  //   return {
  //     stickyHeader: true,
  //     noCollapse: false,
  //     fields: [
  //       {
  //         key: "addr",
  //         stickyColumn: true,
  //         isRowHeader: true,
  //         variant: "success",
  //       },
  //       "9018745:13:P01:23",
  //       "9018745:13:P02:23",
  //       "9018745:13:P03:24",
  //       "9018745:13:P03:03",
  //       "9018745:13:P04:23",
  //       "9018745:13:P13:17",
  //     ],
  //     items: [
  //       {
  //         addr: "0x00",
  //         "9018745:13:P01:23": "0x0F",
  //         "9018745:13:P02:23": "0x0E",
  //         "9018745:13:P03:24": "0x1C",
  //         "9018745:13:P03:03": "0x03",
  //         "9018745:13:P04:23": "0x00",
  //         "9018745:13:P13:17": "0xFF",
  //       },
  //       {
  //         addr: "0x01",
  //         "9018745:13:P01:23": "0x0F",
  //         "9018745:13:P02:23": "0x0E",
  //         "9018745:13:P03:24": "0x1C",
  //         "9018745:13:P03:03": "0x03",
  //         "9018745:13:P04:23": "0x00",
  //         "9018745:13:P13:17": "0xFF",
  //       },
  //       {
  //         addr: "0x02",
  //         "9018745:13:P01:23": "0x0F",
  //         "9018745:13:P02:23": "0x0E",
  //         "9018745:13:P03:24": "0x1C",
  //         "9018745:13:P03:03": "0x03",
  //         "9018745:13:P04:23": "0x00",
  //         "9018745:13:P13:17": "0xFF",
  //       },
  //       {
  //         addr: "0x03",
  //         "9018745:13:P01:23": "0x0F",
  //         "9018745:13:P02:23": "0x0E",
  //         "9018745:13:P03:24": "0x1C",
  //         "9018745:13:P03:03": "0x03",
  //         "9018745:13:P04:23": "0x00",
  //         "9018745:13:P13:17": "0xFF",
  //       },
  //       {
  //         addr: "0x04",
  //         "9018745:13:P01:23": "0x0F",
  //         "9018745:13:P02:23": "0x0E",
  //         "9018745:13:P03:24": "0x1C",
  //         "9018745:13:P03:03": "0x03",
  //         "9018745:13:P04:23": "0x00",
  //         "9018745:13:P13:17": "0xFF",
  //       },
  //       {
  //         addr: "0x05",
  //         "9018745:13:P01:23": "0x0F",
  //         "9018745:13:P02:23": "0x0E",
  //         "9018745:13:P03:24": "0x1C",
  //         "9018745:13:P03:03": "0x03",
  //         "9018745:13:P04:23": "0x00",
  //         "9018745:13:P13:17": "0xFF",
  //       },
  //       {
  //         addr: "0x06",
  //         "9018745:13:P01:23": "0x0F",
  //         "9018745:13:P02:23": "0x0E",
  //         "9018745:13:P03:24": "0x1C",
  //         "9018745:13:P03:03": "0x03",
  //         "9018745:13:P04:23": "0x00",
  //         "9018745:13:P13:17": "0xFF",
  //       },
  //       {
  //         addr: "0x07",
  //         "9018745:13:P01:23": "0x0F",
  //         "9018745:13:P02:23": "0x0E",
  //         "9018745:13:P03:24": "0x1C",
  //         "9018745:13:P03:03": "0x03",
  //         "9018745:13:P04:23": "0x00",
  //         "9018745:13:P13:17": "0xFF",
  //       },
  //       {
  //         addr: "0x08",
  //         "9018745:13:P01:23": "0x0F",
  //         "9018745:13:P02:23": "0x0E",
  //         "9018745:13:P03:24": "0x1C",
  //         "9018745:13:P03:03": "0x03",
  //         "9018745:13:P04:23": "0x00",
  //         "9018745:13:P13:17": "0xFF",
  //       },
  //       {
  //         addr: "0x09",
  //         "9018745:13:P01:23": "0x0F",
  //         "9018745:13:P02:23": "0x0E",
  //         "9018745:13:P03:24": "0x1C",
  //         "9018745:13:P03:03": "0x03",
  //         "9018745:13:P04:23": "0x00",
  //         "9018745:13:P13:17": "0xFF",
  //       },
  //       {
  //         addr: "0x0A",
  //         "9018745:13:P01:23": "0x0F",
  //         "9018745:13:P02:23": "0x0E",
  //         "9018745:13:P03:24": "0x1C",
  //         "9018745:13:P03:03": "0x03",
  //         "9018745:13:P04:23": "0x00",
  //         "9018745:13:P13:17": "0xFF",
  //       },
  //       {
  //         addr: "0x0A",
  //         "9018745:13:P01:23": "0x0F",
  //         "9018745:13:P02:23": "0x0E",
  //         "9018745:13:P03:24": "0x1C",
  //         "9018745:13:P03:03": "0x03",
  //         "9018745:13:P04:23": "0x00",
  //         "9018745:13:P13:17": "0xFF",
  //       },
  //       {
  //         addr: "0x0A",
  //         "9018745:13:P01:23": "0x0F",
  //         "9018745:13:P02:23": "0x0E",
  //         "9018745:13:P03:24": "0x1C",
  //         "9018745:13:P03:03": "0x03",
  //         "9018745:13:P04:23": "0x00",
  //         "9018745:13:P13:17": "0xFF",
  //       },
  //       {
  //         addr: "0x0A",
  //         "9018745:13:P01:23": "0x0F",
  //         "9018745:13:P02:23": "0x0E",
  //         "9018745:13:P03:24": "0x1C",
  //         "9018745:13:P03:03": "0x03",
  //         "9018745:13:P04:23": "0x00",
  //         "9018745:13:P13:17": "0xFF",
  //       },
  //       {
  //         addr: "0x0A",
  //         "9018745:13:P01:23": "0x0F",
  //         "9018745:13:P02:23": "0x0E",
  //         "9018745:13:P03:24": "0x1C",
  //         "9018745:13:P03:03": "0x03",
  //         "9018745:13:P04:23": "0x00",
  //         "9018745:13:P13:17": "0xFF",
  //       },
  //       {
  //         addr: "0x0A",
  //         "9018745:13:P01:23": "0x0F",
  //         "9018745:13:P02:23": "0x0E",
  //         "9018745:13:P03:24": "0x1C",
  //         "9018745:13:P03:03": "0x03",
  //         "9018745:13:P04:23": "0x00",
  //         "9018745:13:P13:17": "0xFF",
  //       },
  //       {
  //         addr: "0x0A",
  //         "9018745:13:P01:23": "0x0F",
  //         "9018745:13:P02:23": "0x0E",
  //         "9018745:13:P03:24": "0x1C",
  //         "9018745:13:P03:03": "0x03",
  //         "9018745:13:P04:23": "0x00",
  //         "9018745:13:P13:17": "0xFF",
  //       },
  //       {
  //         addr: "0x0A",
  //         "9018745:13:P01:23": "0x0F",
  //         "9018745:13:P02:23": "0x0E",
  //         "9018745:13:P03:24": "0x1C",
  //         "9018745:13:P03:03": "0x03",
  //         "9018745:13:P04:23": "0x00",
  //         "9018745:13:P13:17": "0xFF",
  //       },
  //       {
  //         addr: "0x0A",
  //         "9018745:13:P01:23": "0x0F",
  //         "9018745:13:P02:23": "0x0E",
  //         "9018745:13:P03:24": "0x1C",
  //         "9018745:13:P03:03": "0x03",
  //         "9018745:13:P04:23": "0x00",
  //         "9018745:13:P13:17": "0xFF",
  //       },
  //     ],
  //   };
  // },
};
</script>
<style lang="scss">
</style>
