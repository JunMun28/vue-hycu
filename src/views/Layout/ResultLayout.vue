<template>
  <div class="wrapper">
    <header class="site-header">
      <nav
        class="navbar navbar-light bg-white navbar-expand-md justify-content-start justify-content-md-between"
      >
        <a class="navbar-brand" id="site-header__logo" href="#">
          <img
            alt="Cloud Database icon"
            src="https://img.icons8.com/cotton/452/cloud-database.png"
            lazy="loaded"
            height="40"
            style="padding: 0 0.5rem 0 0"
          />
          Hycu Extraction</a
        >
        <div class="flex-grow-1 site-header__option">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a
                class="nav-link list-icon"
                v-bind:class="{ active: layout == 'raw' }"
                v-on:click="layout = 'list'"
                >Raw</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link grid-icon"
                v-bind:class="{ active: layout == 'detail' }"
                v-on:click="layout = 'grid'"
                >Detailed</a
              >
            </li>
          </ul>
        </div>
      </nav>
    </header>

    <!-- </div> -->
    <div class="main-content">
      <!-- <button type="button" @click="getTrimGrps" class="btn btn-primary">
        getTrimGrps
      </button>
      <button
        type="button"
        @click="getDataByTrimGrps('TRIM0')"
        class="btn btn-primary"
      >
        getTrimGrps
      </button> -->
      <div @click="$sidebar.displaySidebar(false)">
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <!-- <router-view></router-view> -->
          <div v-if="layout == 'detail'">
            <detailed-data />
          </div>
          <div v-if="layout == 'raw'">
            <raw-data />
          </div>
        </fade-transition>
      </div>
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
import RawData from "../RawData";
import DetailedData from "../DetailedData";
import { FadeTransition } from "vue2-transitions";

export default {
  components: {
    DashboardNavbar,
    ContentFooter,
    DashboardContent,
    FadeTransition,
    RawData,
    DetailedData,
  },
  data() {
    return {
      layout: "raw",
      trimGrps: [],
    };
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
};
</script>
<style lang="scss">
.site-header {
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  font-family: "Google Sans", "Roboto", sans-serif;
}

#site-header__logo {
  padding: 0 1rem 0 1rem;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 1.5rem;
  color: #4a4a4a;
}

.site-header__option {
  align-items: center;
  flex-direction: row;
  font-size: 1.1rem;
}

a {
  color: #1389fd;
  text-decoration: none;
  background-color: transparent;
}

.nav-link {
  display: block;
  padding: 0.5rem 1rem;
}

.site-header .navbar .nav-link {
  padding: 0 1rem;
  color: #6e7274;
  position: relative;
}

.site-header .navbar .nav-link.active {
  color: #4a4a4a;
  font-weight: 500;
}

.site-header .navbar .nav-link.active:after {
  background-color: #1389fd;
  content: "";
  display: block;
  height: 4px;
  left: 0;
  position: absolute;
  top: calc(50% + (66px / 2) - 3px);
  width: 100%;
}
</style>


