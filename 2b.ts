// Function with number parameters and number return type
function add(a: number, b: number): number {
  return a + b;
}

// Function with string parameters and string return type
function greet(name: string): string {
  return `Hello, ${name}!`;
}

// Function with boolean parameter and void return type
function checkStatus(isActive: boolean): void {
  if (isActive) {
    console.log("Status: Active");
  } else {
    console.log("Status: Inactive");
  }
}

// Function with optional parameter
function multiply(a: number, b?: number): number {
  return b ? a * b : a * 1; // default to 1 if b is undefined
}

// Function with default parameter
function power(base: number, exponent: number = 2): number {
  return base ** exponent;
}

// Calling the functions
console.log("Add:", add(10, 20));
console.log(greet("Alice"));
checkStatus(true);
console.log("Multiply:", multiply(5));
console.log("Power:", power(3));
