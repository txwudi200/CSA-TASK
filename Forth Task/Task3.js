let divs = document.getElementsByTagName("div");

$(document).ready(function() {
    $("#inl").on("click", function() {
        let input = document.getElementById("MyInput").value;
        if (input < 10 || input > 100 || isNaN(input) == true) {
            alert("请输入10-100的数");
            document.getElementById("MyInput").value = "";
        } else {
            lsort(input);
        }
    });

    $("#inr").on("click", function() {
        let input = document.getElementById("MyInput").value;
        let childNum = $(".box2").children().length;
        if (input < 10 || input > 100 || isNaN(input) == true) {
            alert("请输入10-100的数");
            document.getElementById("MyInput").value = "";
        } else {
            rsort(input);
        }
    });


    $("#outl").on("click", function() {
        $(".box2").children().first().remove();
        outResort();
    });

    $("#outr").on("click", function() {
        $(".box2").children().last().remove();
        outResort();
    })

    $("#resort").on("click", function() {
        let childNum = $(".box2").children().length;
        let arr = [];
        let newarr = [];
        let x = 0;

        for (let i = 0; i < childNum; i++) {
            arr[i] = document.getElementsByClassName("box2")[0].children[i].outerText;
        }


        function bubbleSort(arr) {
            let temp;

            for (let i = 0; i < arr.length - 1; i++) {
                for (let j = 0; j < arr.length - i - 1; j++) {
                    if (eval(arr[j]) > eval(arr[j + 1])) {
                        temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                        newarr[x] = arr.slice();
                        x++;
                    }
                }
            }
        }
        bubbleSort(arr);

        let j = 0;
        let timeLimit = setInterval(function crtNewChild() {
            $(".box2").children().remove();
            arr = newarr[j].slice();
            for (let i = 0; i < arr.length; i++) {
                creChild(arr[i], childNum);
            }
            j++;
            if (j >= newarr.length)
                clearInterval(timeLimit);
        }, 300);

    });

    $("#clr").on("click", function() {
        $(".box2").children().remove();
        document.getElementById("MyInput").value = "";
    });

    $("#NumRand").on("click", function() {
        let arr = [];

        for (let i = 0; i < 10; i++) {
            let num = parseInt(Math.random() * 100);
            if (num >= 10 && num <= 100) {
                arr[i] = num;
            }
        }
        let newarr = [];
        let x = newarr.length;

        for (let i = 0; i < 10; i++) {
            if (isNaN(arr[i]) == false) {
                newarr[x] = arr[i];
                x++;
            }
        }

        $(".box2").children().remove();

        function crtNewChild() {
            for (let i = 0; i < x; i++) {
                creChild(newarr[i], x);
            }
        };

        crtNewChild();

    });

    function creChild(a, b) {
        let childNum = $(".box2").children().length;
        let divi = document.createElement("div");
        divi.className = "box2-wrapper";
        let divii = document.createElement("div");
        divii.className = "box2-locked";
        let diviii = document.createElement("div");
        diviii.className = "value";
        let txt = document.createTextNode(a);
        let x = childNum * 100;
        divi.style.transform = 'translateX(' + x + '%)';
        divi.style.width = (850 - b * 10) / b + "px";
        divii.style.width = "100%";
        divi.style.height = a * 5 + "px";
        divi.appendChild(divii);
        divii.appendChild(diviii);
        diviii.appendChild(txt);
        divs[2].appendChild(divi);
    };

    function lsort(input) {
        let childNum = $(".box2").children().length;
        let arr = [];
        arr[0] = input;
        for (let i = 1; i <= childNum; i++) {
            arr[i] = document.getElementsByClassName("box2")[0].children[i - 1].outerText;
        }

        $(".box2").children().remove();

        function crtNewChild() {
            for (let i = 0; i < arr.length; i++) {
                creChild(arr[i], childNum + 1);
            }
        };

        crtNewChild();
    };

    function rsort(input) {
        let childNum = $(".box2").children().length;
        let arr = [];
        arr[childNum] = input;
        for (let i = 0; i < childNum; i++) {
            arr[i] = document.getElementsByClassName("box2")[0].children[i].outerText;
        }

        $(".box2").children().remove();

        function crtNewChild() {
            for (let i = 0; i < arr.length; i++) {
                creChild(arr[i], childNum + 1);
            }
        };

        crtNewChild();
    };


    function outResort() {
        let childNum = $(".box2").children().length;
        let arr = [];
        for (let i = 0; i < childNum; i++) {
            arr[i] = document.getElementsByClassName("box2")[0].children[i].outerText;
        }

        $(".box2").children().remove();

        function crtNewChild() {
            for (let i = 0; i < arr.length; i++) {
                creChild(arr[i], childNum);
            }
        };

        crtNewChild();
    }
});