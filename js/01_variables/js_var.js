/**
 * var
 * 1. Variables declared with var are function scoped
 * 2. Variables declared with var can be redeclared
 * 3. Variables declared with var can be reinitialized
 * 4. Note: Not Recommended ❌
 */

{
    var num = 10;
    console.log(`the value of num is ${num}`);
}

num = 20; // Using var outside the block

var a = 10;
var b = "John"
var voter = true;