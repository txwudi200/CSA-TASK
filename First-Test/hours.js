//实例化XMLHttpRequest对象
const xhr3 = new XMLHttpRequest();
//初始化一个get请求
xhr3.open("GET", "https://devapi.qweather.com/v7/weather/24h?location=101040100&key=73c328441a554b36951ad890a94fcb30", true);
//接收返回值
xhr3.onreadystatechange = () => {
    if (xhr3.readyState === 4) {
        if ((xhr3.status >= 200 && xhr3.status < 300) || xhr3.status == 304) {
            res3 = JSON.parse(xhr3.responseText);
            hours(res3);
        }
    }
}

//发送请求
xhr3.send();

function hours() {
    for (let i = 0; i < 24; i++) {
        changetime(i);
        changeimg(i);
        degree(i);
    }

    function changetime(i) {
        var time = document.getElementsByClassName("time")[i];
        var arr = res3.hourly[i].fxTime.split("");
        var showtime = arr[11] + arr[12] + arr[13] + arr[14] + arr[15];
        var txt = document.createTextNode(showtime);
        time.appendChild(txt);
    }

    function changeimg(i) {
        var icon = document.getElementsByClassName('h-item')[i].children[1];
        icon.className += ' icon-' + res3.hourly[i].icon;
    }

    function degree(i) {
        var temp = document.getElementsByClassName('degree')[i];
        var txt = document.createTextNode(res3.hourly[i].temp + '°');
        temp.appendChild(txt);
    }


}