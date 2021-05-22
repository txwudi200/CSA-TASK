//实例化XMLHttpRequest对象
const xhr1 = new XMLHttpRequest();
//初始化一个get请求
xhr1.open("GET", "https://devapi.qweather.com/v7/weather/now?location=101040100&key=73c328441a554b36951ad890a94fcb30", true);
//接收返回值
xhr1.onreadystatechange = () => {
        if (xhr1.readyState === 4) {
            if ((xhr1.status >= 200 && xhr1.status < 300) || xhr1.status == 304) {
                res1 = JSON.parse(xhr1.responseText);
                main(res1);
            }
        }
    }
    //发送请求
xhr1.send();

function main() {
    // var title = document.getElementsByClassName('text')[0];
    // var txt = document.createTextNode(res1.city);
    // title.appendChild(txt);

    var temp = document.getElementsByClassName("temperature")[0];
    var temptxt = document.createTextNode(res1.now.temp);
    temp.appendChild(temptxt);

    // var air = document.getElementsByClassName("til")[0];
    // var airtxt = document.createTextNode(res1.aqi);
    // air.appendChild(airtxt);

    var weather = document.getElementsByClassName("weather")[0];
    var weatxt = document.createTextNode(res1.now.text);
    weather.appendChild(weatxt);


    var wind = document.getElementsByClassName("wind-txt")[0];
    var win = document.createTextNode(res1.now.windDir + ' ' + res1.now.windScale + "级");

    wind.appendChild(win);
}