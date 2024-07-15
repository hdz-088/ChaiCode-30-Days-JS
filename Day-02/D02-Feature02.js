"use strict";

// Comparison and Logical Operators Script: Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results.

let num1 = 10;
let num2 = 12;

console.log(`${num1}>${num2} is ${num1 > num2}`);
console.log(`${num1}<${num2} is ${num1 < num2}`);
console.log(`${num1}=>${num2} is ${num1 >= num2}`);
console.log(`${num1}<=${num2} is ${num1 <= num2}`);
console.log(`${num1}==${num2} is ${num1 == num2}`);

console.log(`${num1}>${num2} and ${num1}>20 is ${num1 > num2 && num1 > 20}`);
console.log(`${num1}<${num2} or ${num1}<20 is ${num1 < num2 || num1 < 20}`);
console.log(
  `${num1}>${num2} and !${num1}>20 is ${num1 > num2 && !(num1 > 20)}`
);
