// Student class carrys template for each student
import { Person } from "./Person.js";
export class Student extends Person {
    constructor(name, age, ID, courses, shift, year) {
        super(name, age, ID);
        (this.name = name),
            (this.ID = ID),
            (this.courses = courses),
            (this.shift = shift);
        this.year = year;
    }
    printCard() {
        console.log(`
            Name : ${this.name}, Age : ${this.age}
            Roll No. : ${this.ID}
            Courses Enrolled : ${this.courses}
            Shift : ${this.shift}  Year: ${this.year}`);
    }
    changeYear(a) {
        this.year = a;
        console.log(`Year has been change till ${this.year}`);
    }
}
// let Ali = new Student("Ali", 32, 20, ["FA10", "ENG.STD", "CS50"], "Evening", "2");
// Ali.printCard();
