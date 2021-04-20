function Student(name) {
    function People(name) {
        setTimeout(() => {
            console.log(`Hi! This is ${name}!`);
        })
    }

    People.prototype.sleep = function(time) {
        let curTime = new Date();
        let delay = time * 1000;
        setTimeout(() => {
            while (new Date() - curTime < delay) {};
            console.log(`Wake up after ${time}`);
        }, 0);

        return this;
    }

    People.prototype.sleepFirst = function(time) {
        let curTime = new Date();
        let delay = time * 1000;
        while (new Date() - curTime < delay) {};
        console.log(`Wake up after ${time}`);

        return this;
    }

    People.prototype.study = function(course) {
        setTimeout(() => {
            console.log(`Study ${course}~`);
        }, 0);

        return this;
    }

    return new People(name);
}

// Student('fxy');
// Student('fxy').sleep(3).study('javascript');
// Student('fxy').study('javascript').study('Vue');
Student('fxy').sleepFirst(5).study('Ajax');
