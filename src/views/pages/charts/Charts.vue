<template>
  <div id="dashboard-analytics">
    <div class="vx-row">
      <div class="vx-col w-full mb-base">
        <SalesFinanceChart :options="chartOptions"></SalesFinanceChart>
      </div>
    </div>
    <div class="vx-row">
      <div class="vx-col w-full">
        <ExpensesRefundsChart :options="pieChartOptions" :totalExpenses="totalExpenses" :expensesData="expensesData"></ExpensesRefundsChart>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "../../../http/axios/index";

import Highcharts from "highcharts";
import SalesFinanceChart from "../../../components/charts/SalesFinanceChart.vue";
import ExpensesRefundsChart from "../../../components/charts/ExpensesRefundsChart.vue";
import { columnChartConfig, pieChartConfig } from "../../../components/charts/ChartsConfig";
import authConfig from "@/../auth_config.json";

export default {
  data() {
    return {
      chartOptions: columnChartConfig,
      pieChartOptions: pieChartConfig,
      expensesData: [],
      totalExpenses: 0,
    };
  },
  components: {
    SalesFinanceChart,
    ExpensesRefundsChart,
  },

  computed: {
    headers: () => {
      return {
        headers: {
          Authorization: this.$store.state.auth.token,
        },
      };
    },
  },

  methods: {
    getExpensesData(date) {
      this.expensesData = [];
      this.totalExpenses = 0;
      let dateArray;
      if (typeof date !== "string") {
        dateArray = date.point.category.split("-");
      } else {
        dateArray = date.split("-");
      }

      const bodyParameters = {
        marketplace: authConfig.marketplace,
        sellerId: authConfig.sellerId,
        date: {
          month: parseInt(dateArray[1]),
          year: parseInt(dateArray[0]),
        },
      };

      axios
        .post(`${authConfig.apiDomain}/data/sales-expense-by-request-date/`, bodyParameters, {
          headers: {
            Authorization: this.$store.state.auth.token,
          },
        })
        .then((res) => {
          // console.log(res.data);
          const resdata = res.data.Data.item;
          this.totalExpenses = res.data.Data.totalExpenses;
          let i = 0;
          resdata.forEach((item) => {
            if (item.amount > 0) {
              this.expensesData.push({ id: i, name: item.type, y: item.amount, color: Highcharts.getOptions().colors[i] });
              i++;
            }
          });
          this.pieChartOptions.series[0].data = this.expensesData;
          // console.log(this.expensesData);
        })
        .catch((err) => {
          console.log(err.message);
        });
    },

    getData() {
      this.chartOptions.xAxis.categories = [];
      for (let i = 0; i < this.chartOptions.series.length; i++) {
        const element = this.chartOptions.series[i];
        element.data = [];
      }

      const bodyParameters = {
        marketplace: authConfig.marketplace,
        sellerId: authConfig.sellerId,
      };

      const today = new Date(Date.now());
      const dateString = today.getFullYear() + "-" + (today.getMonth() + 1);

      this.getExpensesData(dateString);
      axios
        .post(`${authConfig.apiDomain}/data/sales-finances/`, bodyParameters, {
          headers: {
            Authorization: this.$store.state.auth.token,
          },
        })
        .then((res) => {
          const resdata = res.data.Data.item;
          // console.log(resdata);
          resdata.forEach((item) => {
            this.chartOptions.xAxis.categories.push(item.date);
            this.chartOptions.series[0].data.push(item.reimbursement);
            this.chartOptions.series[1].data.push(item.totalSales);
            this.chartOptions.series[2].data.push(item.refund);
            this.chartOptions.series[3].data.push(item.totalExpenses);
            this.chartOptions.series[4].data.push(item.itemQuantity);
            this.chartOptions.series[5].data.push(item.avgSalesPrice);
          });
          this.chartOptions.plotOptions.series.point.events.click = this.getExpensesData;
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
  },

  mounted() {
    this.getData();
  },
};
</script>

<style lang="scss">
/*! rtl:begin:ignore */

#dashboard-analytics {
  .chart-loading {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 350px;
    p {
      font-weight: bold;
    }
  }
  .pieChart {
    min-height: 500px;
  }
  .expenses {
    display: flex;
    justify-content: space-between;

    div {
      font-weight: bold;
      span {
        min-width: 10px;
        min-height: 10px;
        border-radius: 50%;
        background-color: aqua;
        display: inline-block;
        margin-right: 10px;
      }

      margin: 5px 20px;
    }

    h3 {
      margin: 0 20px 20px;
    }
  }

  .greet-user {
    position: relative;

    .decore-left {
      position: absolute;
      left: 0;
      top: 0;
    }
    .decore-right {
      position: absolute;
      right: 0;
      top: 0;
    }
  }

  @media (max-width: 576px) {
    .decore-left,
    .decore-right {
      width: 140px;
    }
  }
}
/*! rtl:end:ignore */
</style>
