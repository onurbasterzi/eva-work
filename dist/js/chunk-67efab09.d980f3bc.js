(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-67efab09"],{"0b73":function(t,e,a){"use strict";var s=a("ac7f"),n=a.n(s);n.a},"3c47":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"dashboard-analytics"}},[a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-full mb-base"},[a("SalesFinanceChart",{attrs:{options:t.chartOptions}})],1)]),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-full"},[a("ExpensesRefundsChart",{attrs:{options:t.pieChartOptions,totalExpenses:t.totalExpenses,expensesData:t.expensesData}})],1)])])},n=[],o=(a("78ce"),a("ac6a"),a("f3e2"),a("28a5"),a("74f4")),r=a("ea7f"),i=a.n(r),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("vx-card",{staticClass:" text-center bg-primary-gradient greet-user",attrs:{slot:"no-body",title:"Sales & Finance"},slot:"no-body"},[a("highcharts",{ref:"barChart",attrs:{options:t.options}})],1)},c=[],p=a("4452"),d={props:["options"],components:{highcharts:p["Chart"]}},u=d,h=a("2877"),f=Object(h["a"])(u,l,c,!1,null,null,null),x=f.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("vx-card",{staticClass:"pieChart",attrs:{title:"Expenses & Refunds"}},[0!=t.totalExpenses?a("vs-row",[a("vs-col",{attrs:{"vs-xs":"12","vs-lg":"7"}},[a("highcharts",{ref:"pieChart",attrs:{options:t.options}})],1),a("vs-col",{attrs:{"vs-xs":"12","vs-lg":"5"}},[a("div",{staticClass:"expenses"},[a("h3",[t._v("Total Expenses:")]),a("h3",[t._v("$"+t._s(t.totalExpenses))])]),t._l(t.expensesData,(function(e){return a("div",{key:e.id,staticClass:"expenses"},[a("div",{staticClass:"name"},[a("span",{style:{backgroundColor:e.color}}),t._v(t._s(e.name))]),a("div",{staticClass:"amount"},[t._v("$"+t._s(e.y))])])}))],2)],1):a("vs-row",{staticClass:"chart-loading"},[a("p",[t._v("Please wait while gathering your data.Your charts will be ready shortly.")])])],1)},v=[],m={props:["options","totalExpenses","expensesData"]},b=m,y=Object(h["a"])(b,g,v,!1,null,null,null),C=y.exports,w={chart:{type:"column",backgroundColor:"transparent",marginBottom:80,paddingTop:20},title:{text:""},xAxis:{categories:[],title:{text:null,style:{color:"#fff"}},labels:{overflow:"justify",style:{color:"#fff"}},crosshair:{color:"rgba(255,255,255,.2)"}},yAxis:[{min:0,title:{text:"Amount ($)",align:"middle",style:{color:"#fff"}},labels:{overflow:"justify",style:{color:"#fff"}}},{min:0,title:{text:"Quantity (Units)",align:"middle",style:{color:"#fff"}},labels:{overflow:"justify",style:{color:"#fff"}},opposite:!0,valuePrefix:"$"}],tooltip:{valuePrefix:"$",shared:!0,backgroundColor:"rgba(24, 30, 88, 0.85)",borderColor:"#fff",borderWidth:2,style:{color:"#fff",fontSize:"14px"}},plotOptions:{bar:{dataLabels:{enabled:!0}},column:{stacking:"normal"},series:{cursor:"pointer",point:{events:{}}}},legend:{align:"center",verticalAlign:"bottom",x:0,y:0,floating:!0,backgroundColor:"transparent",itemStyle:{color:"#fff"}},credits:{enabled:!1},series:[{name:"Reimbursement",data:[],stack:"sales",color:"green"},{name:"Total Sales",data:[],stack:"sales",color:"greenyellow"},{name:"Total Refund",data:[],stack:"expense",color:"red"},{name:"Total Expense",data:[],stack:"expense",color:"orange"},{type:"spline",name:"Quantity",yAxis:1,data:[],color:"lightblue",tooltip:{valuePrefix:"",shared:!0}},{showInLegend:!1,name:"Avg. Sales",data:[],stack:"sales"}],responsive:{rules:[{condition:{maxWidth:500},chartOptions:{legend:{align:"center",verticalAlign:"bottom",layout:"horizontal"},plotOptions:{column:{dataLabels:{enabled:!1},showInLegend:!1}},yAxis:{labels:{align:"left",x:0,y:-5},title:{text:null}},subtitle:{text:null},credits:{enabled:!1}}}]}},O={chart:{plotBackgroundColor:null,plotBorderWidth:null,plotShadow:!1,type:"pie",backgroundColor:"transparent"},title:{text:""},accessibility:{point:{valuePrefix:"$"}},plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",dataLabels:{enabled:!1},showInLegend:!1}},credits:{enabled:!1},series:[{name:"$",colorByPoint:!0,data:[]}]},k=a("8160"),E=void 0,D={data:function(){return{chartOptions:w,pieChartOptions:O,expensesData:[],totalExpenses:0}},components:{SalesFinanceChart:x,ExpensesRefundsChart:C},computed:{headers:function(){return{headers:{Authorization:E.$store.state.auth.token}}}},methods:{getExpensesData:function(t){var e,a=this;this.expensesData=[],this.totalExpenses=0,e="string"!==typeof t?t.point.category.split("-"):t.split("-");var s={marketplace:k.marketplace,sellerId:k.sellerId,date:{month:parseInt(e[1]),year:parseInt(e[0])}};o["a"].post("".concat(k.apiDomain,"/data/sales-expense-by-request-date/"),s,{headers:{Authorization:this.$store.state.auth.token}}).then((function(t){var e=t.data.Data.item;a.totalExpenses=t.data.Data.totalExpenses;var s=0;e.forEach((function(t){t.amount>0&&(a.expensesData.push({id:s,name:t.type,y:t.amount,color:i.a.getOptions().colors[s]}),s++)})),a.pieChartOptions.series[0].data=a.expensesData})).catch((function(t){console.log(t.message)}))},getData:function(){var t=this;this.chartOptions.xAxis.categories=[];for(var e=0;e<this.chartOptions.series.length;e++){var a=this.chartOptions.series[e];a.data=[]}var s={marketplace:k.marketplace,sellerId:k.sellerId},n=new Date(Date.now()),r=n.getFullYear()+"-"+(n.getMonth()+1);this.getExpensesData(r),o["a"].post("".concat(k.apiDomain,"/data/sales-finances/"),s,{headers:{Authorization:this.$store.state.auth.token}}).then((function(e){var a=e.data.Data.item;a.forEach((function(e){t.chartOptions.xAxis.categories.push(e.date),t.chartOptions.series[0].data.push(e.reimbursement),t.chartOptions.series[1].data.push(e.totalSales),t.chartOptions.series[2].data.push(e.refund),t.chartOptions.series[3].data.push(e.totalExpenses),t.chartOptions.series[4].data.push(e.itemQuantity),t.chartOptions.series[5].data.push(e.avgSalesPrice)})),t.chartOptions.plotOptions.series.point.events.click=t.getExpensesData})).catch((function(t){console.log(t.message)}))}},mounted:function(){this.getData()}},_=D,A=(a("0b73"),Object(h["a"])(_,s,n,!1,null,null,null));e["default"]=A.exports},"78ce":function(t,e,a){var s=a("5ca1");s(s.S,"Date",{now:function(){return(new Date).getTime()}})},ac7f:function(t,e,a){}}]);
//# sourceMappingURL=chunk-67efab09.d980f3bc.js.map