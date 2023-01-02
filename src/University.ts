import { Student } from "./Student.js";
import { Teacher } from "./Teacher.js";
import inquirer from "inquirer";
console.log("Yo!");
let s = 1;
let t = 1;
let IDs: number[] = [];
let Students: Student[] = [];
let Teachers: Teacher[] = [];

// Main Menu:
async function mainMenu() {
  let selection = await inquirer.prompt([
    { type: "list", name: "studentData", choices: ["Student", "Teacher"] },
  ]);

  // Student's path
  if (selection.choices == "Student") {
    let student = await inquirer.prompt([
      {
        type: "list",
        name: "registration",
        choices: ["New Register", "Existing Student"],
      },
    ]);
    // New Student
    if (student.choices == "New Register") {
      let newStud: any = newStudent();
      Students.push(newStud);
      //Existing Student
    } else if (student.choices == "Existing Student") {
      existStudent();
    }
    // Teacher's Path
  } else if (selection.choices == "Teacher") {
    let teacher = await inquirer.prompt([
      {
        type: "list",
        name: "teacherData",
        choices: ["New Teacher", "Existing Teacher"],
      },
    ]);
    // New Teacher
    if (teacher.choices == "New Teacher") {
      let newTeach: any = newTeacher();
      return newTeach;
      // Existing Teacher
    } else if (teacher.choices == "Existing Teacher") {
      existTeacher();
    }
  }
}

// New Student Making
async function newStudent() {
  let student = await inquirer.prompt([
    {
      name: "name",
      type: String,
      message: "Enter Full Name: ",
    },
    {
      name: "age",
      type: Number,
      message: "Enter age: ",
    },
    {
      name: "courses",
      type: String,
      message: "Enter courses' tags (separated by comma): ",
    },
    {
      name: "shift",
      type: "list",
      message: "Select shift: ",
      choices: ["Morning", "Evening"],
    },
  ]);
  return new Student(
    student.name,
    student.age,
    ++s,
    student.courses,
    student.shift,
    (student.year = "1")
  );
}

// Existing Student Function

async function existStudent() {
  let student = await inquirer.prompt([
    { type: "string", message: "Enter Student ID: ", name: "ID" },
  ]);

  if (student.ID in IDs) {
    let currentStudent = Students[student.ID];

    let choice = await inquirer.prompt([
      {
        type: "list",
        name: "choice",
        message: "Select : ",
        choices: ["Print Card", "Change Year"],
      },
    ]);
    if (choice.choices == "Print Card") {
      currentStudent.printCard();
    } else {
      let a = await inquirer.prompt([
        {
          type: "string",
          message: "Enter year from 1,2,3,4 or 'A'",
          name: "choice",
        },
      ]);
      currentStudent.changeYear(a.choice);
    }
  } else {
    console.log("ID not registered");
  }
}

///////////////////////////////////////

// New Teacher
async function newTeacher() {
  let teacher = await inquirer.prompt([
    {
      name: "name",
      type: String,
      message: "Enter Full Name: ",
    },
    {
      name: "age",
      type: Number,
      message: "Enter age: ",
    },
    {
      name: "course",
      type: String,
      message: "Enter courses' tags (separated by comma): ",
    },
  ]);
  return new Teacher(teacher.name, teacher.age, ++t, teacher.course, 4);
}
// Existing Teacher
async function existTeacher() {
  let teacher = await inquirer.prompt([
    { name: "ID", type: "string", message: "Enter Teacher ID: " },
  ]);
  if (teacher.ID in Teachers) {
    let currentTeacher = Teachers[teacher.ID];
    let choice = await inquirer.prompt([
      {
        type: "list",
        name: "choice",
        message: "Select : ",
        choices: ["Print Card", "Get Rating", "Revise Rating"],
      },
    ]);
    if (choice.choices == "Print Card") {
      currentTeacher.staff_card();
    } else if (choice.choices == "Get Rating") {
      currentTeacher.rating;
    } else if (choice.choices == "Revise Rating") {
      let a = await inquirer.prompt([
        {
          type: "number",
          message: "Enter rating from 1~5",
          name: "rank",
        },
      ]);
      currentTeacher.rating = a.rank;
    }
  } else {
    console.log("ID not registered");
  }
}

///////////////////////////////////////
mainMenu;
