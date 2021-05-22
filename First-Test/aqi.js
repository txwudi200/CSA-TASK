//实例化XMLHttpRequest对象
const xh6 = new XMLHttpRequest();
//初始化一个get请求
xh6.open("GET", "https://devapi.qweather.com/v7/air/now?&location=101040100&key=73c328441a554b36951ad890a94fcb30", true);
//接收返回值
xh6.onreadystatechange = () => {
    if (xh6.readyState === 4) {
        if ((xh6.status >= 200 && xh6.status < 300) || xh6.status == 304) {
            res6 = JSON.parse(xh6.responseText);
            aqi(res6);
        }
    }
}

//发送请求
xh6.send();

function aqi() {
    document.getElementsByClassName('til')[0].appendChild(document.createTextNode(res6.now.aqi));
    document.getElementsByClassName('value')[0].appendChild(document.createTextNode(res6.now.category));

    if (document.getElementsByClassName('value')[0].innerHTML == '优') {
        document.getElementsByClassName('aqi')[0].style.backgroundColor = '#a3d765';
    } else if (document.getElementsByClassName('value')[0].innerHTML == '良') {
        document.getElementsByClassName('aqi')[0].style.backgroundColor = '#f0cc35';
    }
}