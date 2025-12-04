/**
 * let
 * 1. Variable declared with let is block scoped
 * 2. Variable declared with let must be declared before use
 * 3. Variable declared with let can be redeclared in the same scope
 */
let num1 = 10;
let num2 = 20;

let sum = num1 + num2;

console.log(`the sum of ${num1} and ${num2} is ${sum}`);

// We can't redeclared the same variable that is already declared with let
// let num1 = 50;
// let num2 = "jon";

{
    let x = 10;
    console.log(`the value of x is ${x}`);
}

// We can't access the variable declared with let outside the block
// console.log(`the value of x is ${x}`);
