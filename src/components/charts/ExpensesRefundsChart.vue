<template>
    <vx-card class="pieChart" title="Expenses & Refunds">
          <vs-row v-if="totalExpenses != 0">
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
            <p>Please wait while gathering your data.Your charts will be ready shortly.</p>
          </vs-row>
        </vx-card>
</template>

<script>
export default {
 props: ['options','totalExpenses','expensesData'],
}
</script>

<style>

</style>