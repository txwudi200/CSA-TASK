let arr = [{ id: 10, name: 'kc' }, { id: 8, name: 'hy' }, { id: 15, name: 'pipi' }, { id: 2, name: 'mama' }]

function compare(a, b) {
    return a.id - b.id;
}

arr.sort(compare);

console.log(arr);