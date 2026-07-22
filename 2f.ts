//  1. Generic Variable
let genericValue: <T>(value: T) => T = function<T>(value: T): T {
  return value;
};

console.log("Generic Variable (number):", genericValue<number>(42));
console.log("Generic Variable (string):", genericValue<string>("Hello"));


//  2. Generic Function
function identity<T>(arg: T): T {
  return arg;
}

console.log("Generic Function (boolean):", identity<boolean>(true));
console.log("Generic Function (array):", identity<number[]>([1, 2, 3]));


// 3. Generic Function with Multiple Types
function pair<A, B>(first: A, second: B): [A, B] {
  return [first, second];
}

console.log("Generic Pair:", pair<string, number>("Age", 25));


//  4. Generic with Constraint
interface HasLength {
  length: number;
}

function printLength<T extends HasLength>(item: T): void {
  console.log("Length is:", item.length);
}

printLength("TypeScript");             // string has length
printLength([1, 2, 3, 4]);             // array has length
// printLength(123); âŒ Error: number doesn't have 'length'


// 5. Generic Class
class Box<T> {
  private _value: T;

  constructor(value: T) {
    this._value = value;
  }

  getValue(): T {
    return this._value;
  }
}

const stringBox = new Box<string>("Generic Box");
console.log("Box Value:", stringBox.getValue());

