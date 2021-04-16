for (var i = 0; i < 5; i++) {
    (function(i) {
        setTimeout(function() {
            console.log(new Date, i);
        }, 1000 * i);
    })(i)
}
// console.log(new Date, i);
// for (let i = 0; i < 5; i++) {
//     setTimeout(function() {
//         console.log(new Date, i);
//     }, 1000 * i);
// }