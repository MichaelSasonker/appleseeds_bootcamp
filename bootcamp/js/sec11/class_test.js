class Person {
    constructor(name, age) {
        this.name = name;
        this.age  = age;
    }

    SetAge(num) {
        this.age = num;
    }

    Draw() {
        console.log(this);
    }
}

let per1 = new Person('avi', 18);
let per2 = new Person('moshe', 40);

per1.Draw();
per2.Draw();

per1.SetAge(19);
per2.SetAge(41);

per1.Draw();
per2.Draw();
