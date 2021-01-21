<template>
  <footer class="footer px-4 mx-2">
    <b-row align-v="center" class="justify-content-lg-between">
      <b-col lg="6">
        <div class="copyright text-center text-lg-left text-muted">
          © {{ year }}
          <a href="https://" class="font-weight-bold ml-1" target="_blank"
            >Test</a
          >
        </div>
      </b-col>
      <b-col lg="6">
        <b-nav class="nav-footer justify-content-center justify-content-lg-end">
          <b-nav-item ref="https://" target="_blank"> Test</b-nav-item>
          <b-nav-item href="https:///presentation" target="_blank">
            About Us
          </b-nav-item>
          <b-nav-item href="http://" target="_blank"> Blog </b-nav-item>
          <b-nav-item href="https:///license" target="_blank">
            License
          </b-nav-item>
        </b-nav>
      </b-col>
    </b-row>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>
<style></style>
