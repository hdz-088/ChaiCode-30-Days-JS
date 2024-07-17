"use strict";

// Task-07: Write a function that takes two parameters and return their product. Provide a default value for the second operator.

let product = (num1, num2 = 1) => num1 * num2;

console.log(product(5, 2));
console.log(product(8));
