// Making a class for teacher.

import { Person } from "./Person.js";

export class Teacher extends Person {
  private course: string;
  private last_quarter_rating: number;

  constructor(
    name: string,
    age: number,
    ID: number,
    course: string,
    last_quarter_rating: number
  ) {
    super(name, age, ID);
    this.course = course;
    this.last_quarter_rating = last_quarter_rating;
  }

  get rating() {
    console.log(
      `The last quarter rating for ${this.name} is ${this.last_quarter_rating}`
    );
    return this.last_quarter_rating;
  }

  set rating(current_rating) {
    console.log(
      `The last quarter's rating has been changed from ${this.last_quarter_rating} to ${current_rating}`
    );
    this.last_quarter_rating = current_rating;
  }

  staff_card() {
    console.log(
      `
            Name : ${this.name}, Age : ${this.age} 
            ID : ${this.ID}  Course : ${this.course}`
    );
  }
}
