var arr = [];

for (var i = 0; i < 5; i++) {
    arr.push(i);
}

setTimeout(function() {
    console.log(arr.toString());
}, 1000);

console.log(i + "->");