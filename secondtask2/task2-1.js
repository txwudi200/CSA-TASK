var arr = [1, 55, 11, 100, 30, 2, 102541, 111, 520];

function sort(arr) {
    var i, j, temp;

    for (i = 0; i < arr.length - 1; i++) {
        for (j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

console.log(sort(arr));