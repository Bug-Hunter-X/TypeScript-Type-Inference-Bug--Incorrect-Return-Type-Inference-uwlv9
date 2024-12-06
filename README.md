# TypeScript Type Inference Bug

This repository demonstrates a bug in TypeScript's type inference where the return type of a function is incorrectly inferred as `number | undefined` instead of `number`, even though the function always returns a number. This happens when the function might receive non-number inputs, which is handled correctly within the function but leads to an inaccurate type inference. 

## Bug Description
The `add` and `subtract` functions are defined to always return numbers. However, TypeScript's type inference incorrectly infers their return type as `number | undefined`. This can lead to unexpected type errors if the functions are used where a number is strictly expected.

## Bug Reproduction
1. Clone this repository.
2. Compile the TypeScript code using `tsc bug.ts`.
3. Observe the compiler's type inference for the `add` and `subtract` functions.

## Solution
The solution involves explicitly specifying the return type of the functions as `number`, correcting the type inference issue and ensuring type safety.

## Note
This bug highlights the importance of explicitly defining return types, especially in situations where the function's behavior might depend on the input values but does not result in an undefined return.