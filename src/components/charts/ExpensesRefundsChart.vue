<template>
  <vx-card class="pieChart" :title="getDate">
    <vs-row v-if="expensesData.length > 0 && this.expensesData[0].id!==-1">
      <vs-col vs-xs="12" vs-lg="7">
        <highcharts :options="options" ref="pieChart"></highcharts>
      </vs-col>
      <vs-col vs-xs="12" vs-lg="5">
        <div class="expenses">
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
      <p v-if="expensesData.length === 0">Please wait while gathering your data.Your charts will be ready shortly.</p>
      <div v-else>
         <p v-if="expensesData[0].id===-1">No expense data found.</p>
      </div>
     

    </vs-row>

    <!-- <div v-else>
      <vs-row class="chart-loading">
        <p>No expense records found</p>
      </vs-row>
    </div> -->
  </vx-card>
</template>

<script>
export default {
  props: ["options", "totalExpenses", "expensesData"],
  computed: {
    getDate() {
      // console.log(this.expensesData[0]);
      if (this.expensesData.length > 0 && this.expensesData[0].id!==-1) {
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
