namespace MathUtils {
  export function add(a: number, b: number): number {
    return a + b;
  }

  export function subtract(a: number, b: number): number {
    return a - b;
  }
}

// Using the namespace
console.log("Namespace Add:", MathUtils.add(10, 5));
console.log("Namespace Subtract:", MathUtils.subtract(10, 5));

