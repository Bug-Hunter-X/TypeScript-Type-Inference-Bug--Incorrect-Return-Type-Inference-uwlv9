function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result1 = add(5, 3); // result1 will be 8
let result2 = subtract(10, 4); // result2 will be 6

console.log(result1, result2); // Output: 8 6

//The bug is that the return type of the function is not correctly inferred.  The type checker will infer the return type as `number | undefined`. This is because the function may return `undefined` if the input is not a number.  However, this is not what the function does, it always returns a number.  The return type should be corrected to `number`.