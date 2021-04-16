let str = "I'm?���going�??�to�?�take�??�a?�trip�?�to��?daocheng�?�on��May Day."
let newstr = str.split("");
let a = [];
let x = 0;

for (let i = 0; i < newstr.length; i++) {
    if (/�/.test(newstr[i]) == false && newstr[i] != "?") {
        a[x] = newstr[i];
        x++;
    }
    if (/�/.test(newstr[i]) == true && /�/.test(newstr[i + 1]) == false && newstr[i + 1] != "?") {
        a[x] = " ";
        x++;
    }
    if (newstr[i] == "?" && newstr[i + 1] != "?" && /�/.test(newstr[i + 1]) == false) {
        newstr[i + 1] = newstr[i + 1].toUpperCase();
        a[x] = " ";
        x++;
    }
}

a = a.join("");

console.log(a); // 'I'm going to take a trip to Daocheng on May Day.'