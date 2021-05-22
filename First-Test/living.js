//实例化XMLHttpRequest对象
const xhr5 = new XMLHttpRequest();
//初始化一个get请求
xhr5.open("GET", "https://devapi.qweather.com/v7/indices/1d?type=0&location=101040100&key=73c328441a554b36951ad890a94fcb30", true);
//接收返回值
xhr5.onreadystatechange = () => {
    if (xhr5.readyState === 4) {
        if ((xhr5.status >= 200 && xhr5.status < 300) || xhr5.status == 304) {
            res5 = JSON.parse(xhr5.responseText);
            changetxt(res5);
        }
    }
}

//发送请求
xhr5.send();

function changetxt() {
    txt(0, 10); //穿衣
    txt(1, 1); //紫外线
    txt(2, 12); //感冒
    txt(3, 13); //洗车
    txt(4, 15); //运动
    txt(5, 11); //防晒
    txt(6, 14); //钓鱼
    txt(7, 3); //旅游
    txt(8, 7); //交通
    txt(9, 9); //空气污染扩散条件
    txt(10, 8); //舒适度
    txt(11, 6); //晾晒
    txt(12, 0); //化妆
    txt(13, 2); //空调
    txt(14, 5); //过敏
    txt(15, 4); //太阳镜


    function txt(i, j) {
        document.getElementsByClassName('content')[i].appendChild(document.createTextNode(res5.daily[j].category));
    }
}