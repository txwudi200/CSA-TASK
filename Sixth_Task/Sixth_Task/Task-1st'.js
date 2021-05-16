//实例化XMLHttpRequest对象
const xhr = new XMLHttpRequest();
//初始化一个get请求
xhr.open("GET", "http://localhost:3000/search?keywords=海阔天空/cloudsearch?keywords=海阔天空", true);
//接收返回值
xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
            res = JSON.parse(xhr.responseText);
            console.log(res);
            console.log("请求成功");
            // do something

            var di = document.createElement("div");
            document.getElementsByClassName("container")[0].appendChild(di);
            var di1 = document.createElement("div");
            var b = document.createElement("b");
            b.innerHTML = res.result.songs[0].artists[0].name;
            di1.appendChild(b);
            di.appendChild(di1);

        }
    } else {
        console.log("请求失败");
    }
}

//发送请求
xhr.send();