var data = {
    age: 18,
    name: "liuruchao",
    education: ["小学", "初中", "高中", "大学", undefined, null],
    likesFood: new Set(["fish", "banana"]),
    friends: [
        { name: "summer", sex: "woman" },
        { name: "daWen", sex: "woman" },
        { name: "yang", sex: "man" }
    ],
    work: {
        time: "2019",
        project: { name: "test", obtain: ["css", "html", "js"] }
    },
    play: function() { console.log("玩滑板"); }
}

function deepCopy(data) {
    let newdata = Array.isArray(data) ? [] : {};
    for (let key in data) {
        if (typeof data[key] === 'object') {
            newdata[key] = deepCopy(data[key]);
        } else {
            newdata[key] = data[key];
        }
    }
    return newdata;
}

console.log(data);