<template>
  <vx-card slot="no-body" title="Sales & Finance" class=" text-center bg-primary-gradient greet-user">
    <highcharts :options="options" ref="barChart"></highcharts>
  </vx-card>
</template>
<script>

import { Chart } from "highcharts-vue";

export default {
  props: ['options'],
 
  components: {
    highcharts: Chart,
  },
};
</script>

<style></style>
