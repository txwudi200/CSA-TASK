var ary = [1, [2, [3, [4, 5]]], 6];

function even(ary) {
    return ary.toString().split(',').map(function(ary) { return Number(ary) })
}

console.log(even(ary)); //[1,2,3,4,5,6]