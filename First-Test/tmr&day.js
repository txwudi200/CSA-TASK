//实例化XMLHttpRequest对象
const xhr2 = new XMLHttpRequest();
//初始化一个get请求
xhr2.open("GET", "https://devapi.qweather.com/v7/weather/7d?location=101040100&key=73c328441a554b36951ad890a94fcb30", true);
//接收返回值
xhr2.onreadystatechange = () => {
    if (xhr2.readyState === 4) {
        if ((xhr2.status >= 200 && xhr2.status < 300) || xhr2.status == 304) {
            res2 = JSON.parse(xhr2.responseText);
            tomorrow(res2);
            days(res2);
            crtcanvas(res2);
        }
    }
}

//发送请求
xhr2.send();

//实例化XMLHttpRequest对象
const xhr4 = new XMLHttpRequest();
//初始化一个get请求
xhr4.open("GET", "https://datasetapi.qweather.com/v7/historical/weather?location=101040100&date=20210521&key=b248c365fef84263bcd3a1e26232db9d", true);
//接收返回值
xhr4.onreadystatechange = () => {
        if (xhr4.readyState === 4) {
            if ((xhr4.status >= 200 && xhr4.status < 300) || xhr4.status == 304) {
                res4 = JSON.parse(xhr4.responseText);
                history(res4);
                crtcanvas(res4);
            }
        }
    }
    //发送请求
xhr4.send();

function history() {
    var dayhis = document.getElementsByClassName('day-icon')[0];
    var nighthis = document.getElementsByClassName('night-icon')[0];
    dayhis.className += ' icon-' + res4.weatherHourly[6].icon;
    nighthis.className += ' icon-' + res4.weatherHourly[18].icon;

    var hisdaytxt = document.getElementsByClassName('day-wea')[0];
    var daytxt = document.createTextNode(res4.weatherHourly[6].text);
    hisdaytxt.appendChild(daytxt);

    var hisnighttxt = document.getElementsByClassName('night-wea')[0];
    var nighttxt = document.createTextNode(res4.weatherHourly[18].text);
    hisnighttxt.appendChild(nighttxt);

    var wind = document.getElementsByClassName('wind')[0];
    var windtxt = document.createTextNode(res4.weatherHourly[12].windDir);
    wind.appendChild(windtxt);

    var windscale = document.getElementsByClassName('wind-scale')[0];
    var windscaletxt = document.createTextNode(res4.weatherHourly[12].windScale + '级');
    windscale.appendChild(windscaletxt);
}

function tomorrow() {
    for (let i = 0; i < 2; i++) {
        crtwea(i);
        cretxt(i);
        crelogo(i);
    }

    function crtwea(i) {
        var wea = document.getElementsByClassName("weather")[i + 1];
        var weatxt = document.createTextNode(res2.daily[i].textDay);
        wea.appendChild(weatxt);
    }

    function cretxt(i) {
        var tem = document.getElementsByClassName("temperature")[i + 1];
        var temtxt = document.createTextNode(res2.daily[i].tempMax + '/' + res2.daily[i].tempMin + '°');
        tem.appendChild(temtxt);
    }

    function crelogo(i) {
        var icon = res2.daily[i].iconDay;
        document.getElementsByClassName('logo')[i].className += ' ' + 'icon-' + icon;
    }
}

function days() {
    for (let i = 0; i < 7; i++) {
        crtday(i);
        crtdate(i);
        iconday(i);
        iconnight(i);
        crtnight(i);
        wind(i);
        windspeed(i);
    }

    var date = document.getElementsByClassName("date")[0];
    var arr = res2.daily[0].fxDate.split("");
    var day = arr[8] + arr[9] - 1;
    var txt = arr[5] + arr[6] + '/' + day;
    var text = document.createTextNode(txt);
    date.appendChild(text);

    function crtdate(i) {
        var date = document.getElementsByClassName("date")[i + 1];
        var arr = res2.daily[i].fxDate.split("");
        var txt = arr[5] + arr[6] + '/' + arr[8] + arr[9];
        var text = document.createTextNode(txt);
        date.appendChild(text);
    }

    function crtday(i) {
        var daywea = document.getElementsByClassName('day-wea')[i + 1];
        var txt = document.createTextNode(res2.daily[i].textDay);
        daywea.appendChild(txt);
    }

    function crtnight(i) {
        var daywea = document.getElementsByClassName('night-wea')[i + 1];
        var txt = document.createTextNode(res2.daily[i].textNight);
        daywea.appendChild(txt);
    }

    function iconday(i) {
        var icon = document.getElementsByClassName('day-icon')[i + 1];
        icon.className += ' ' + 'icon-' + res2.daily[i].iconDay;
    }

    function iconnight(i) {
        var icon = document.getElementsByClassName('night-icon')[i + 1];
        icon.className += ' ' + 'icon-' + res2.daily[i].iconNight;
    }

    function wind(i) {
        var windtxt = document.getElementsByClassName('wind')[i + 1];
        var txt = document.createTextNode(res2.daily[i].windDirDay);
        windtxt.appendChild(txt);
    }

    function windspeed(i) {
        var windtxt = document.getElementsByClassName('wind-scale')[i + 1];
        var txt = document.createTextNode(res2.daily[i].windSpeedDay + '级');
        windtxt.appendChild(txt);
    }

}

function crtcanvas() {
    var dom = document.getElementById("chart-days");
    var myChart = echarts.init(dom);

    var option;

    option = {
        tooltip: {
            trigger: 'axis',
            showContent: false,
        },
        grid: {
            left: '0',
            right: '15',
            top: '30',
            bottom: '0',
            width: '400',
            containLabel: true
        },

        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['', '', '', '', '', '', '', ''],
            show: false
        },
        yAxis: {
            type: 'value',
            show: false
        },
        series: [{
                name: '最低温度',
                type: 'line',
                stack: '总量',
                symbol: 'circle',
                symbolSize: 7,
                data: [res4.weatherDaily.tempMin, res2.daily[0].tempMin, res2.daily[1].tempMin, res2.daily[2].tempMin, res2.daily[3].tempMin, res2.daily[4].tempMin, res2.daily[5].tempMin, res2.daily[6].tempMin],
                itemStyle: {
                    color: 'DodgerBlue',
                    normal: {
                        label: {
                            show: true,
                            textStyle: {
                                fontSize: 15
                            },
                            formatter: '{c}°'
                        }
                    }
                },
                lineStyle: {
                    color: 'DodgerBlue',
                }
            },
            {
                name: '最高温度',
                type: 'line',
                stack: '总量',
                symbol: 'circle',
                symbolSize: 7,

                data: [res4.weatherDaily.tempMax, res2.daily[0].tempMax, res2.daily[1].tempMax, res2.daily[2].tempMax, res2.daily[3].tempMax, res2.daily[4].tempMax, res2.daily[5].tempMax, res2.daily[6].tempMax],
                itemStyle: {
                    color: 'orange',
                    normal: {
                        label: {
                            show: true,
                            textStyle: {
                                fontSize: 15,
                            },
                            formatter: '{c}°'
                        }
                    }
                },
                color: 'orange',
            }
        ],
    };

    if (option && typeof option === 'object') {
        myChart.setOption(option);
    }

    document.getElementById('chart-days').firstElementChild.style.top = '95px';
}