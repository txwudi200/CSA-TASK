var n = 5;
var arr = ["1", "2", "3", "5", "5", "5", "6"];

function count(arr, n) {
    var i, num = 0;

    for (i = 0; i < arr.length; i++) {
        if (arr[i] == n) {
            num++;
        }
    }

    return num;
}

console.log(count(arr, n));