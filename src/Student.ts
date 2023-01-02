// Student class carrys template for each student

import { Person } from "./Person.js";
type year = "1" | "2" | "3" | "4" | "A";

export class Student extends Person {
  private courses: string[];
  private shift: "Evening" | "Morning";
  private year: year;

  constructor(
    name: string,
    age: number,
    ID: number,
    courses: string[],
    shift: "Evening" | "Morning",
    year: year
  ) {
    super(name, age, ID),
      (this.name = name),
      (this.ID = ID),
      (this.courses = courses),
      (this.shift = shift),
      (this.year = year);
  }

  printCard() {
    console.log(
      `
            Name : ${this.name}, Age : ${this.age}
            Roll No. : ${this.ID}
            Courses Enrolled : ${this.courses}
            Shift : ${this.shift}  Year: ${this.year}`
    );
  }

  changeYear(a: year) {
    this.year = a;
    console.log(`Year has been change till ${this.year}`);
  }
}

// AN EXAMPLE:

// let Ali = new Student("Ali", 32, 20, ["FA10", "ENG.STD", "CS50"], "Evening", "2");
// Ali.printCard();
