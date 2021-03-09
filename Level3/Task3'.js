function Animal() {}
Animal.prototype.species = "动物";

function Cat(name, color) {
    this.name = name;
    this.color = color;
}

function extend(Child, Parent) {
    let F = function() {};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
}

extend(Cat, Animal);
let cat1 = new Cat("大毛", "黄色");

console.log(cat1.species);