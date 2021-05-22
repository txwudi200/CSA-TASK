// //实例化XMLHttpRequest对象
// const xhr4 = new XMLHttpRequest();
// //初始化一个get请求
// xhr4.open("GET", "https://datasetapi.qweather.com/v7/historical/weather?location=101040100&date=20210521&key=b248c365fef84263bcd3a1e26232db9d", true);
// //接收返回值
// xhr4.onreadystatechange = () => {
//         if (xhr4.readyState === 4) {
//             if ((xhr4.status >= 200 && xhr4.status < 300) || xhr4.status == 304) {
//                 res4 = JSON.parse(xhr4.responseText);
//                 history(res4);
//             }
//         }
//     }
//     //发送请求
// xhr4.send();

// function history() {
//     var dayhis = document.getElementsByClassName('day-icon')[0];
//     var nighthis = document.getElementsByClassName('night-icon')[0];
//     dayhis.className += ' icon-' + res4.weatherHourly[6].icon;
//     nighthis.className += ' icon-' + res4.weatherHourly[18].icon;

//     var hisdaytxt = document.getElementsByClassName('day-wea')[0];
//     var daytxt = document.createTextNode(res4.weatherHourly[6].text);
//     hisdaytxt.appendChild(daytxt);

//     var hisnighttxt = document.getElementsByClassName('night-wea')[0];
//     var nighttxt = document.createTextNode(res4.weatherHourly[18].text);
//     hisnighttxt.appendChild(nighttxt);

//     var wind = document.getElementsByClassName('wind')[0];
//     var windtxt = document.createTextNode(res4.weatherHourly[12].windDir);
//     wind.appendChild(windtxt);

//     var windscale = document.getElementsByClassName('wind-scale')[0];
//     var windscaletxt = document.createTextNode(res4.weatherHourly[12].windScale + '级');
//     windscale.appendChild(windscaletxt);
// }