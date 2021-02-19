var arr = ["D", "J", "S", "A", "L", "F", "J", "A", "L", "S", "K", "J"];

function retur(arr) {
    var newarr = [];
    arr.sort();

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i + 1] && newarr.indexOf(arr[i].repeat(2)) == -1) {
            newarr.push(arr[i].repeat(2));
        }
    }

    return newarr;
}

console.log(retur(arr));
