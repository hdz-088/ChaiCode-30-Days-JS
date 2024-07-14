"use strict";

// Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.

let num1 = 10;

const num2 = 6

console.log("Before Reassignment: ");
console.log("let Variable: ", num1);
console.log("const Variable: ", num2);

num1 = 7;
num2 = 10;

console.log("After Reassignment: ");
console.log("let Variable: ", num1);
console.log("const Variable: ", num2);