"use strict";
class Person {
    // Properties with access specifiers
    name;
    age;
    gender;
    // Constructor to initialize properties
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    // Public method (accessible from outside)
    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }
    // Private method (accessible only inside class)
    showAge() {
        console.log(`I am ${this.age} years old.`);
    }
    // Protected method (accessible in subclass)
    displayGender() {
        console.log(`Gender: ${this.gender}`);
    }
    // Method to access private method
    displayDetails() {
        this.showAge(); // private method
        this.displayGender(); // protected method
    }
}
// Subclass that inherits Person
class Student extends Person {
    studentId;
    constructor(name, age, gender, studentId) {
        super(name, age, gender);
        this.studentId = studentId;
    }
    showStudentInfo() {
        console.log(`Student ID: ${this.studentId}`);
        this.displayGender(); // Can access protected method
    }
}
// Using the class
const person1 = new Person("Alice", 30, "Female");
person1.greet();
person1.displayDetails();
// person1.showAge(); âŒ Error: private method
// person1.displayGender(); âŒ Error: protected method
const student1 = new Student("Bob", 20, "Male", 101);
student1.greet();
student1.displayDetails();
student1.showStudentInfo();
