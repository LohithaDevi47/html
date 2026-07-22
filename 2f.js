"use strict";
//  1. Generic Variable
let genericValue = function (value) {
    return value;
};
console.log("Generic Variable (number):", genericValue(42));
console.log("Generic Variable (string):", genericValue("Hello"));
//  2. Generic Function
function identity(arg) {
    return arg;
}
console.log("Generic Function (boolean):", identity(true));
console.log("Generic Function (array):", identity([1, 2, 3]));
// 3. Generic Function with Multiple Types
function pair(first, second) {
    return [first, second];
}
console.log("Generic Pair:", pair("Age", 25));
function printLength(item) {
    console.log("Length is:", item.length);
}
printLength("TypeScript"); // string has length
printLength([1, 2, 3, 4]); // array has length
// printLength(123); âŒ Error: number doesn't have 'length'
// 5. Generic Class
class Box {
    _value;
    constructor(value) {
        this._value = value;
    }
    getValue() {
        return this._value;
    }
}
const stringBox = new Box("Generic Box");
console.log("Box Value:", stringBox.getValue());
