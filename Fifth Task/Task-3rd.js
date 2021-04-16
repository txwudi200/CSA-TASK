function Student(name) {
    Student.cbs = [];
    Student.cbs.push(() => {
        console.log(`Hi! This is ${name}!`);
        Student.next()
    })
    setTimeout(() => {
        Student.next();
    }, 0);
    return Student;
}

Student.next = function() {
    const cb = Student.cbs.shift();
    cb && cb();
}

Student.sleep = function(time) {
    Student.cbs.push(() => {
        setTimeout(() => {
            console.log(`Wake up after ${time}`);
            Student.next();
        }, time * 1000);
    })
    return Student;
}

Student.sleepFirst = function(time) {
    Student.cbs.unshift(() => {
        setTimeout(() => {
            console.log(`Wake up after ${time}`);
            Student.next();
        }, time * 1000)
    })
    return Student;
}

Student.study = function(course) {
    Student.cbs.push(() => {
        console.log(`Study ${course}`);
        Student.next();
    })
    return Student;
}

Student('fxy');
// Student('fxy').sleep(3).study('javascript');
// Student('fxy').study('javascript').study('Vue');
// Student('fxy').sleepFirst(5).study('Ajax');