//  Arrow function with default parameters
const greet = (name: string = "Guest"): string => {
  return `Hello, ${name}!`;
};

// Arrow function with optional parameter
const fullName = (firstName: string, lastName?: string): string => {
  return lastName ? `${firstName} ${lastName}` : firstName;
};

//  Arrow function with rest parameters
const sum = (...numbers: number[]): number => {
  return numbers.reduce((total, num) => total + num, 0);
};

//  Arrow function assigned to a variable (shows reusability and compact syntax)
const square = (n: number): number => n * n;

//  Using all functions
console.log(greet()); // default name
console.log(greet("Alice"));

console.log(fullName("John"));             // optional last name
console.log(fullName("John", "Doe"));      // with last name

console.log("Sum:", sum(1, 2, 3, 4, 5));    // REST parameters
console.log("Square of 6:", square(6));
