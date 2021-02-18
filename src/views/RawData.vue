<template>
  <div class="p-6">
    <!-- <button type="button" @click="loadData('TRIM0')" class="btn btn-primary">
      getTrimGrps
    </button> -->

    <grid :cols="cols" :rows="rows" :styles="styles"></grid>
  </div>
</template>
<script>
import Grid from "gridjs-vue";

export default {
  name: "icons",
  components: { Grid },
  data() {
    return {
      cols: [],
      rows: [],
      styles: {
        table: {
          textAlign: "center",
        },
      },
    };
  },
  created() {
    this.cols = this.getHeader("TRIM0");
    this.rows = this.getData("TRIM0");
  },
  methods: {
    // loadData(trimGroup) {
    //   this.cols = this.getHeader(trimGroup);
    //   // console.log(this.getHeader(trimGroup));
    //   // console.log(this.cols);
    //   this.rows = this.getData(trimGroup);
    //   // console.log(this.rows);
    // },
    getTrimGrps() {
      this.trimGrps = this.$store.getters.trimGroups("TRIM0");
      // console.log(this.trimGrps);
    },
    getHeader(trimGroup) {
      // console.log(this.$store.getters.TrimGrpHeader(trimGroup));
      return this.$store.getters.TrimGrpHeader(trimGroup);
    },
    getData(trimGroup) {
      // console.log(this.$store.getters.TrimGrpData(trimGroup));
      return this.$store.getters.TrimGrpData(trimGroup);
    },
  },
};
</script>
<style></style>
