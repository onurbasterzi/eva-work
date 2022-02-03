<template>
  <vx-card class="pieChart" :title="getDate">
    <vs-row v-if="totalExpenses != 0">
      <vs-col vs-xs="12" vs-lg="7">
        <highcharts :options="options" ref="pieChart"></highcharts>
      </vs-col>
      <vs-col vs-xs="12" vs-lg="5">
        <br />
        <div class="expenses">
          <br />
          <h3>Total Expenses:</h3>
          <h3>${{ totalExpenses }}</h3>
        </div>
        <div class="expenses" v-for="item in expensesData" :key="item.id">
          <div class="name"><span :style="{ backgroundColor: item.color }"></span>{{ item.name }}</div>
          <div class="amount">${{ item.y }}</div>
        </div>
      </vs-col>
    </vs-row>
    <vs-row class="chart-loading" v-else>
      <p>Please wait while gathering your data.Your charts will be ready shortly.</p>
    </vs-row>
  </vx-card>
</template>

<script>
export default {
  props: ["options", "totalExpenses", "expensesData"],
  computed: {
    getDate() {
      if (this.expensesData.length > 0) {
        let date = this.expensesData[0].date;
        const formatter = new Intl.DateTimeFormat("en", { month: "long" });
        const month = formatter.format(new Date(parseInt(date[0]), parseInt(date[1]) - 1, 1));
        return "Expenses & Refunds (" + month + " " + date[0] + ")";
      } else {
        return "Expenses & Refunds";
      }
    },
  },
};
</script>

<style></style>
