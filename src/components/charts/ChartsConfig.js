

export const columnChartConfig = {

    chart: {
      type: "column",
      backgroundColor: "transparent",
      marginBottom: 80,
      paddingTop: 20,
    },
      title: {
      text: "",
    },

    xAxis: {
      categories: [],
      title: {
        text: null,
        style: {
          color: "#fff",
        },
      },
      labels: {
        overflow: "justify",

        style: {
          color: "#fff",
        },
      },
      crosshair: {
        color: "rgba(255,255,255,.2)",
      },
    },
    yAxis: [
      {
        min: 0,
        title: {
          text: "Amount ($)",
          align: "middle",
          style: {
            color: "#fff",
          },
        },
        labels: {
          overflow: "justify",
          style: {
            color: "#fff",
          },
        },
      },
      {
        //second y axis
        min: 0,
        title: {
          text: "Quantity (Units)",
          align: "middle",
          style: {
            color: "#fff",
          },
        },
        labels: {
          overflow: "justify",
          style: {
            color: "#fff",
          },
        },
        opposite: true,
        valuePrefix: "$",
      },
    ],
    tooltip: {
      // valueSuffix: " millions",
      valuePrefix: "$",
      shared: true,
      backgroundColor: "rgba(24, 30, 88, 0.85)",
      borderColor:'#fff',
      borderWidth:2,
     

      style: {
        color: "#fff",
        fontSize:'14px',
      },
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true,
        },
      },
     
      column: {
        stacking: "normal",
      },

      series: {
        cursor: "pointer",
        point: {
          events: {
          
          },
        },
      },
    },
    legend: {
      align: "center",
      verticalAlign: "bottom",
      x: 0,
      y: 0,
      floating: true,
      // borderWidth: 1,

      backgroundColor: "transparent",
       itemStyle: {
        color: "#fff",
      },
      // shadow: true,
    },
    credits: {
      enabled: false,
    },

    series: [
      {
        name: "Reimbursement",
        data: [],
        stack: "sales",
        color: "green",
      },
      {
        name: "Total Sales",
        data: [],
        stack: "sales",
        color: "greenyellow",
      },

      {
        name: "Total Refund",
        data: [],
        stack: "expense",
        color: "red",
      },

      {
        name: "Total Expense",
        data: [],
        stack: "expense",
        color: "orange",
      },
      {
        type: "spline",
        name: "Quantity",
        yAxis: 1,
        data: [],
        color: "lightblue",
        tooltip: {
          valuePrefix: "",
          shared: true,
        },
      },
      {
        showInLegend: false,
        name: "Avg. Sales",
        data: [],
        stack: "sales",
      },
    ],
    responsive: {
      rules: [{
          condition: {
              maxWidth: 500
          },
          chartOptions: {
              legend: {
                  align: 'center',
                  verticalAlign: 'bottom',
                  layout: 'horizontal'
              },
              plotOptions:{
                column:{
                  dataLabels: {
                    enabled: false,
                  },
                  showInLegend: false,
                }
              },
              yAxis: {
                  labels: {
                      align: 'left',
                      x: 0,
                      y: -5
                  },
                  title: {
                      text: null
                  }
              },
              subtitle: {
                  text: null
              },
              credits: {
                  enabled: false
              }
          }
      }]
  }
  };


  export const pieChartConfig={
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
      backgroundColor: "transparent",
    },
    title: {
      text: "",
    },
  
    accessibility: {
      point: {
        valuePrefix: "$",
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: false,
        },
        showInLegend: false,
      },
    },
    credits: {
      enabled: false,
    },

    series: [
      {
        name: "$",
        colorByPoint: true,
        data: [],
      },
    ],
  }