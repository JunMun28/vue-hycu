<template>
  <div class="main-content bg-default">
    <zoom-center-transition :duration="pageTransitionDuration" mode="out-in">
      <div>
        <!-- Header -->
        <div class="header bg-gradient-success py-5 pb-lg-8 pt-lg-7">
          <b-container>
            <div class="header-body text-center mb-7">
              <b-row class="justify-content-center">
                <b-col xl="8" lg="6" md="8" class="px-5">
                  <div class="webpage-name display-1 text-white">
                    HYCU EXTRACTION
                  </div>
                </b-col>
              </b-row>
            </div>
          </b-container>
          <div class="separator separator-bottom separator-skew zindex-100">
            <svg
              x="0"
              y="0"
              viewBox="0 0 2560 100"
              preserveAspectRatio="none"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon
                class="fill-default"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>
        <!-- Page content -->
        <b-container class="mt--9 pb-9">
          <b-row class="justify-content-center">
            <b-col lg="9" md="7">
              <b-card no-body class="bg-secondary border-0 mb-0">
                <!-- <b-card-header class="bg-transparent pb-5">
                  <div class="text-muted text-center mt-2 mb-3">
                    <small>Sign in with</small>
                  </div>
                  <div class="btn-wrapper text-center">
                    <a href="#" class="btn btn-neutral btn-icon">
                      <span class="btn-inner--icon"
                        ><img src="img/icons/common/github.svg"
                      /></span>
                      <span class="btn-inner--text">Github</span>
                    </a>
                    <a href="#" class="btn btn-neutral btn-icon">
                      <span class="btn-inner--icon"
                        ><img src="img/icons/common/google.svg"
                      /></span>
                      <span class="btn-inner--text">Google</span>
                    </a>
                  </div>
                </b-card-header> -->
                <b-card-body class="px-lg-5 py-lg-5">
                  <div class="text-center text-muted mb-4">
                    <small>Please insert the following info</small>
                  </div>
                  <validation-observer
                    v-slot="{ handleSubmit }"
                    ref="formValidator"
                  >
                    <b-form
                      role="form"
                      @submit.prevent="handleSubmit(onSubmit)"
                    >
                      <b-form-textarea
                        id="textarea"
                        v-model="lotIds"
                        placeholder="Enter FIDs or Lot number in slash format..."
                        rows="2"
                        max-rows="8"
                        class="my-4"
                      ></b-form-textarea>

                      <base-input
                        alternative
                        class="mb-3"
                        name="Email"
                        placeholder="Design ID"
                        v-model="model.email"
                      >
                      </base-input>

                      <b-form-textarea
                        id="textarea"
                        v-model="hycuIds"
                        placeholder="(Optional) Enter targeted trend/series..."
                        rows="2"
                        max-rows="8"
                        class="my-4"
                      ></b-form-textarea>

                      <b-form-group
                        label="Hycu Output"
                        v-slot="{ ariaDescribedby }"
                      >
                        <b-form-checkbox-group
                          v-model="selected"
                          :options="options"
                          :aria-describedby="ariaDescribedby"
                          name="buttons-1"
                          buttons
                          button-variant="success"
                          class="check-box_buttons"
                        ></b-form-checkbox-group>
                      </b-form-group>

                      <div class="text-center">
                        <base-button
                          type="primary"
                          native-type="submit"
                          class="my-4"
                          @click="$router.push('result')"
                          >Submit</base-button
                        >
                      </div>
                    </b-form>
                  </validation-observer>
                </b-card-body>
              </b-card>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </zoom-center-transition>
  </div>
</template>
<script>
import { BaseNav } from "@/components";
import { ZoomCenterTransition } from "vue2-transitions";

export default {
  components: {
    BaseNav,
    ZoomCenterTransition,
  },
  props: {
    backgroundColor: {
      type: String,
      default: "black",
    },
  },
  data() {
    return {
      lotIds: "",
      hycuIds: "",
      showMenu: false,
      menuTransitionDuration: 250,
      pageTransitionDuration: 200,
      year: new Date().getFullYear(),
      pageClass: "login-page",
      model: {
        email: "",
        password: "",
        rememberMe: false,
      },
      selected: ["trims", "retrims"], // Must be an array reference!
      options: [
        { text: "trims", value: "trims" },
        { text: "retrims", value: "retrims" },
      ],
    };
  },
  computed: {
    title() {
      return `${this.$route.name} Page`;
    },
  },
  created: function () {
    // axios.get("https://jsonplaceholder.typicode.com/todos");
    // this.$get("/", this.setChairs, {});
    // this.$get("products/chairs/42", null);
    // this.$post("products/chairs/", this.addMessage, { name: "Red Chair" });
    // this.$put("products/chairs/42", this.addMessage, { three: 3 });
    // this.$delete("products/chairs/42", this.addMessage, { three: 3 });
    // console.log(this.$store.state.count);
  },
  methods: {
    setChairs: function (res) {
      // this.chairs = res;
      // console.log(res);
    },
    handleError: function (err) {
      this.message = err;
    },
    addMessage: function (res) {
      this.messages.push(res.message);
    },
    toggleNavbar() {
      document.body.classList.toggle("nav-open");
      this.showMenu = !this.showMenu;
    },
    closeMenu() {
      document.body.classList.remove("nav-open");
      this.showMenu = false;
    },
    setBackgroundColor() {
      document.body.classList.add("bg-default");
    },
    removeBackgroundColor() {
      document.body.classList.remove("bg-default");
    },
    updateBackground() {
      if (!this.$route.meta.noBodyBackground) {
        this.setBackgroundColor();
      } else {
        this.removeBackgroundColor();
      }
    },
    onSubmit() {
      // this will be called only after form is valid. You can do api call here to login
    },
  },
  beforeDestroy() {
    this.removeBackgroundColor();
  },
  beforeRouteUpdate(to, from, next) {
    // Close the mobile menu first then transition to next page
    if (this.showMenu) {
      this.closeMenu();
      setTimeout(() => {
        next();
      }, this.menuTransitionDuration);
    } else {
      next();
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler: function () {
        this.updateBackground();
      },
    },
  },
};
</script>
<style lang="scss">
.check-box_buttons .btn {
  background-color: rgb(229, 247, 229);
  border-color: rgb(209, 209, 209);
  color: rgb(44, 43, 43);
}

$scaleSize: 0.8;
@keyframes zoomIn8 {
  from {
    opacity: 0;
    transform: scale3d($scaleSize, $scaleSize, $scaleSize);
  }
  100% {
    opacity: 1;
  }
}

.main-content .zoomIn {
  animation-name: zoomIn8;
}

@keyframes zoomOut8 {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: scale3d($scaleSize, $scaleSize, $scaleSize);
  }
}

.main-content .zoomOut {
  animation-name: zoomOut8;
}
</style>

