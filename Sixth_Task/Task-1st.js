const API = 'http://musicapi.leanapp.cn/';
const request = new XMLHttpRequest();
// (method: string, url: string, isAsync = true): void
// 第三个参数是否异步，默认是 true
request.open('GET', API, true);

request.onreadystatechange = function() {
    if (request.readyState === 4) {
        if (request.status === 200) {
            const json = JSON.parse(request.responseText);
            // 这里我们只是把它打印出来
            // 一般我们要根据拿到的对象把响应的数据动态插入到页面中
            // （用 DOM 的一些方法：innerHTML、innerText……）
            console.log(json);
            console.log(request.responseText);
            console.log('请求成功');
        } else {
            console.log('请求错误');
        }
    }
}

request.send();