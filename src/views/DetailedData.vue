<template>
  <div class="p-6">
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
      cols: [
        "Addr",
        "1111111:13:P01:23",
        "1111111:13:P02:23",
        "1111111:13:P03:24",
        "1111111:13:P03:03",
        "1111111:13:P04:23",
        "1111111:13:P13:17",
      ],
      rows: [
        ["0x01", "0x0F", "0x0E", "0x1C", "0x03", "0x00", "0xFF"],
        ["0x01", "0x0F", "0x0E", "0x1C", "0x03", "0x00", "0xFF"],
        ["0x01", "0x0F", "0x0E", "0x1C", "0x03", "0x00", "0xFF"],
        ["0x01", "0x0F", "0x0E", "0x1C", "0x03", "0x00", "0xFF"],
        ["0x01", "0x0F", "0x0E", "0x1C", "0x03", "0x00", "0xFF"],
        ["0x01", "0x0F", "0x0E", "0x1C", "0x03", "0x00", "0xFF"],
        ["0x01", "0x0F", "0x0E", "0x1C", "0x03", "0x00", "0xFF"],
        ["0x01", "0x0F", "0x0E", "0x1C", "0x03", "0x00", "0xFF"],
        ["0x01", "0x0F", "0x0E", "0x1C", "0x03", "0x00", "0xFF"],
        ["0x01", "0x0F", "0x0E", "0x1C", "0x03", "0x00", "0xFF"],
        ["0x01", "0x0F", "0x0E", "0x1C", "0x03", "0x00", "0xFF"],
        ["0x01", "0x0F", "0x0E", "0x1C", "0x03", "0x00", "0xFF"],
        ["0x01", "0x0F", "0x0E", "0x1C", "0x03", "0x00", "0xFF"],
        ["0x01", "0x0F", "0x0E", "0x1C", "0x03", "0x00", "0xFF"],
        ["0x01", "0x0F", "0x0E", "0x1C", "0x03", "0x00", "0xFF"],
        ["0x01", "0x0F", "0x0E", "0x1C", "0x03", "0x00", "0xFF"],
        ["0x01", "0x0F", "0x0E", "0x1C", "0x03", "0x00", "0xFF"],
        ["0x01", "0x0F", "0x0E", "0x1C", "0x03", "0x00", "0xFF"],
        ["0x01", "0x0F", "0x0E", "0x1C", "0x03", "0x00", "0xFF"],
        ["0x01", "0x0F", "0x0E", "0x1C", "0x03", "0x00", "0xFF"],
        ["0x01", "0x0F", "0x0E", "0x1C", "0x03", "0x00", "0xFF"],
        ["0x01", "0x0F", "0x0E", "0x1C", "0x03", "0x00", "0xFF"],
        ["0x01", "0x0F", "0x0E", "0x1C", "0x03", "0x00", "0xFF"],
        ["0x01", "0x0F", "0x0E", "0x1C", "0x03", "0x00", "0xFF"],
        ["0x01", "0x0F", "0x0E", "0x1C", "0x03", "0x00", "0xFF"],
        ["0x01", "0x0F", "0x0E", "0x1C", "0x03", "0x00", "0xFF"],
      ],
      styles: {
        table: {
          textAlign: "center",
        },
      },
    };
  },
};
</script>
<style></style>
