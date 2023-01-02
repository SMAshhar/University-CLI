// making a general class for students as well as teachers

export class Person {
    protected name:string;
    protected age:number;
    protected ID:number

    constructor (name:string, age: number, ID:number) {
        this.name = name;
        this.age = age;
        this.ID = ID;
    }

}