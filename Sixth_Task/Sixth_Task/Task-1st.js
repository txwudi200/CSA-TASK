//实例化XMLHttpRequest对象
const xhr = new XMLHttpRequest();
//初始化一个get请求
xhr.open("GET", "http://localhost:3000/personalized", true);
//接收返回值
xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
                res = JSON.parse(xhr.responseText);
                console.log(res);
                console.log("请求成功");
                // do something

                for (let i = 0; i < 10; i++) {
                    var li = document.createElement("li");
                    document.getElementsByClassName("container")[0].appendChild(li);
                    //加入盒子
                    var di = document.createElement("div");
                    di.className = "pic-container"
                    li.appendChild(di);
                    //加入文字
                    var text = document.createElement("p");
                    text.innerHTML = res.result[i].name;
                    li.appendChild(text);
                    //加入图片
                    var im = document.createElement("img");
                    im.src = res.result[i].picUrl;

                    im.style.width = '100%';
                    im.style.height = '100%';

                    di.appendChild(im);
                }

            } else {
                console.log("请求失败");
            }
        }
    }
    //发送请求
xhr.send();