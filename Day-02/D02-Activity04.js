"use strict";

let num1 = 10;
let num2 = 12;

// Task-11: Write a program that uses the && operator to combine two conditions and log the result to the console.

console.log(`${num1}>${num2} and ${num1}>20 is ${num1>num2 && num1>20}`);

// Task-12: Write a program that uses the || operator to combine two conditions and log the result to the console.

console.log(`${num1}<${num2} or ${num1}<20 is ${num1<num2 || num1<20}`);

// Task-13: Write a program that uses the ! operator to negate a condition and log the result to the console.

console.log(`${num1}>${num2} and !${num1}>20 is ${num1>num2 && !(num1>20)}`);