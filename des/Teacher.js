// Making a class for teacher.
import { Person } from "./Person.js";
export class Teacher extends Person {
    constructor(name, age, ID, course, last_quarter_rating) {
        super(name, age, ID);
        this.course = course;
        this.last_quarter_rating = last_quarter_rating;
    }
    get rating() {
        console.log(`The last quarter rating for ${this.name} is ${this.last_quarter_rating}`);
        return this.last_quarter_rating;
    }
    set rating(current_rating) {
        console.log(`The last quarter's rating has been changed from ${this.last_quarter_rating} to ${current_rating}`);
        this.last_quarter_rating = current_rating;
    }
    staff_card() {
        console.log(`
            Name : ${this.name}, Age : ${this.age} 
            ID : ${this.ID}  Course : ${this.course}`);
    }
}
