var arr = [1, [2, [3, [4, 5]]], 6];
let newarr = [];

function even(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            even(arr[i]);
        } else {
            newarr.push(arr[i]);
        }
    }
    return newarr;
}

console.log(even(arr)); //[1,2,3,4,5,6]