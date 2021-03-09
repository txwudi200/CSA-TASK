var str = "today is a happy day";

function change(str) {
    var i, newstr;
    newstr = str.split(" ");
    for (i = 0; i < newstr.length; i++) {
        newstr[i] = newstr[i].slice(0, 1).toUpperCase() + newstr[i].slice(1).toLowerCase();
    }

    return newstr.join(" ");
}


console.log(change(str));