"use strict";
// Function with number parameters and number return type
function add(a, b) {
    return a + b;
}
// Function with string parameters and string return type
function greet(name) {
    return `Hello, ${name}!`;
}
// Function with boolean parameter and void return type
function checkStatus(isActive) {
    if (isActive) {
        console.log("Status: Active");
    }
    else {
        console.log("Status: Inactive");
    }
}
// Function with optional parameter
function multiply(a, b) {
    return b ? a * b : a * 1; // default to 1 if b is undefined
}
// Function with default parameter
function power(base, exponent = 2) {
    return base ** exponent;
}
// Calling the functions
console.log("Add:", add(10, 20));
console.log(greet("Alice"));
checkStatus(true);
console.log("Multiply:", multiply(5));
console.log("Power:", power(3));
