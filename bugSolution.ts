function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result1 = add(5, 3); // result1 will be 8
let result2 = subtract(10, 4); // result2 will be 6

console.log(result1, result2); // Output: 8 6
//The solution is to explicitly specify the return type of the function. This will force the type checker to correctly infer the return type as `number`. 