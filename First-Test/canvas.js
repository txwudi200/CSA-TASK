// var dom = document.getElementById("chart-days");
// var myChart = echarts.init(dom);
// var app = {};

// var option;

// option = {
//     tooltip: {
//         trigger: 'axis'
//     },
//     grid: {
//         left: '0',
//         right: '15',
//         top: '50',
//         bottom: '0',
//         width: '400',
//         containLabel: true
//     },
//     xAxis: {
//         type: 'category',
//         boundaryGap: false,
//         data: ['', '', '', '', '', '', '', ''],
//         show: false
//     },
//     yAxis: {
//         type: 'value',
//         show: false
//     },
//     series: [{
//             name: '最低温度',
//             type: 'line',
//             stack: '总量',
//             data: [30, res2.daily[0].tempMax, res2.daily[1].tempMax, res2.daily[2].tempMax, res2.daily[3].tempMax, res2.daily[4].tempMax, res2.daily[5].tempMax, res2.daily[6].tempMax],
//             itemStyle: {
//                 normal: {
//                     label: {
//                         show: true,
//                         textStyle: {
//                             fontSize: 15
//                         },
//                         formatter: '{c}°'
//                     }
//                 }
//             },
//         },
//         {
//             name: '最高温度',
//             type: 'line',
//             stack: '总量',
//             data: [33, res2.daily[0].tempMin, res2.daily[0].tempMin, res2.daily[2].tempMin, res2.daily[3].tempMin, res2.daily[4].tempMin, res2.daily[5].tempMin, res2.daily[6].tempMin],
//             itemStyle: {
//                 normal: {
//                     label: {
//                         show: true,
//                         textStyle: {
//                             fontSize: 15,
//                         },
//                         formatter: '{c}°'
//                     }
//                 }
//             },
//         }
//     ],
// };

// if (option && typeof option === 'object') {
//     myChart.setOption(option);
// }

// document.getElementById('chart-days').firstElementChild.style.top = '95px'